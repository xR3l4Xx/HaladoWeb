import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { Site, Wagon } from 'app/core/models';
import { DataStore } from 'app/core/stores';
import { SiteService } from 'app/features/site/services/site.service';
import { Subject, takeUntil, map, filter } from 'rxjs';
import { CreateWagonComponent } from '../../components/create-wagon/create-wagon.component';
import { EditWagonComponent } from '../../components/edit-wagon/edit-wagon.component';



@Component({
  selector: 'app-wagons-list',
  templateUrl: './wagons-list.component.html',
  styleUrls: ['./wagons-list.component.css']
})
export class WagonsListComponent implements OnInit {

  wagons: Wagon[] = [];
  sites!: Site[];
  showDeleted: boolean = false;

  siteId: number = 0;

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective | undefined;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(public store: DataStore, public modalService: NgbModal,
    public siteService: SiteService, private route: ActivatedRoute,) { }

  onAddWagon(wagon: Wagon) {
    this.store.addWagon(wagon)
    this.updateFilter();
  }

  openCreateWagonModal() {
    const modalRef = this.modalService.open(CreateWagonComponent)
    modalRef.componentInstance.wagon = {
      id: -1,
      serialNumber: "",
      yearOfProduction: 0,
      ownerId: 1,
      deleted: false,
      siteId: 1
    };
    modalRef.componentInstance.saveWagon = (wagon: Wagon) => this.onAddWagon(wagon);
  }

  inferSiteName(siteId: number) {
    const site = this.sites.find(s => s.id == siteId);
    return site?.name;
  }

  onUpdateWagon(wagon: Wagon) {
    console.log("UPDATE")
    console.log(wagon)
    this.store.updateWagon(wagon);
    this.updateFilter();
    console.log(wagon)
  }

  openEditWagonModal(wagon: Wagon) {
    const modalRef = this.modalService.open(EditWagonComponent)
    modalRef.componentInstance.wagon = {...wagon};
    modalRef.componentInstance.saveWagon = (wagon: Wagon) => this.onUpdateWagon(wagon);
  }

  onDeleteWagon(wagon: Wagon){
    wagon.deleted = true;
    this.onUpdateWagon(wagon);
  }

  updateFilter(): void {

    this.wagons = [];

    console.log(this.siteId);

    if(this.showDeleted){
      this.store.state$
      .pipe(
        map(state => state.wagons.filter(wagon => this.siteId > 0 ? wagon.siteId == this.siteId : true)))
      .subscribe(data => {
        this.wagons = data.sort((a, b) => a.id - b.id);
      })
    }else{
      this.store.state$
      .pipe(
        map(state => state.wagons.filter(wagon => (wagon.deleted == false) && (this.siteId > 0 ? wagon.siteId == this.siteId : true))))
      .subscribe(data => {
          this.wagons = data.sort((a, b) => a.id - b.id);
      })
    }

    this.dtElement?.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next(void 0);
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if(id != null && id != undefined){
        this.siteId = Number(id);
      }else{
        this.siteId = 0;
      }
      console.log("id:" + id);
    });
    this.updateFilter();
    this.siteService.fetchAllSites((sites: Site[]) => this.sites = sites)
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next(void 0);
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
