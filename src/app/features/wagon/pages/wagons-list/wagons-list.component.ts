import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Site, Wagon } from 'app/core/models';
import { DataStore } from 'app/core/stores';
import { SiteService } from 'app/features/site/services/site.service';
import { takeUntil, map, filter } from 'rxjs';
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

  constructor(public store: DataStore, public modalService: NgbModal,
    public siteService: SiteService) { }

  onAddWagon(wagon: Wagon) {
    this.store.addWagon(wagon)
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
    console.log(wagon)
  }

  openEditWagonModal(wagon: Wagon) {
    const modalRef = this.modalService.open(EditWagonComponent)
    modalRef.componentInstance.wagon = {...wagon};
    modalRef.componentInstance.saveWagon = (wagon: Wagon) => this.onUpdateWagon(wagon);
  }

  updateFilter(): void {

    this.wagons = [];

    if(this.showDeleted){
      this.store.state$
      .pipe(
        map(state => state.wagons))
      .subscribe(data => {
        this.wagons = data.sort((a, b) => a.id - b.id);
      })
    }else{
      this.store.state$
      .pipe(
        map(state => state.wagons))
      .subscribe(data => {
        this.wagons = data.filter(wagon => wagon.deleted == false);
        this.wagons = this.wagons.sort((a, b) => a.id - b.id);
      })
    }
  }

  ngOnInit(): void {
    this.updateFilter();
    this.siteService.fetchAllSites((sites: Site[]) => this.sites = sites)
  }

}
