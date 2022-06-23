import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Owner, Site, Wagon } from 'app/core/models';
import { OwnerService } from 'app/shared/owner.service';
import { SiteService } from '../../services/site.service';
import { SiteCreateComponent } from '../site-create/site-create.component';
import { SiteEditComponent } from '../site-edit/site-edit.component';
import { Subject } from 'rxjs';
import { WagonService } from 'app/features/wagon/services/wagon.service';

@Component({
  selector: 'app-site-table',
  templateUrl: './site-table.component.html',
  styleUrls: ['./site-table.component.css']
})
export class SiteTableComponent implements OnInit {

  sites!: Site[]; 
  owners!: Owner[];

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective | undefined;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(public siteService: SiteService, public ownerService: OwnerService, 
    public modalService: NgbModal, private wagonService: WagonService) { }

  onDeleteSite(site: Site) {
    var noWagons = 0;
    this.wagonService.fetchBySiteId(site.id, (wagons: Wagon[]) => noWagons = wagons.length);
    if(noWagons > 0){
      alert("This site has at least one wagon!")
    }else{
      this.siteService.deleteSite(site);
      //this.updateTable();
    }
  }

  onRestoreSite(site: Site) {
    this.siteService.updateSite({...site, deleted: false})
  }

  onEditSite(site: Site) {
    const modalRef = this.modalService.open(SiteEditComponent)
    modalRef.componentInstance.site = {...site};
  }

  addSite() {
    this.modalService.open(SiteCreateComponent);
  }

  inferOwnerName(site: Site) {
    const owner = this.owners.find(o => o.id == site.ownerId);
    if (owner) {
      return owner.name;
    }
    return "-";
  }

  updateTable(): void{

    this.siteService.fetchAllSites((sites: Site[]) => this.sites = sites.sort((a: Site, b: Site) => a.id - b.id))
    
    this.dtElement?.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next(void 0);
    });
  }

  ngOnInit(): void {
    this.updateTable();
    this.ownerService.fetchAllOwners((owners: Owner[]) => this.owners = owners);
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }

}
