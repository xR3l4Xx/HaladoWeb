import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Owner, Site } from 'app/core/models';
import { OwnerService } from 'app/shared/owner.service';
import { SiteService } from '../../services/site.service';
import { SiteEditComponent } from '../site-edit/site-edit.component';

@Component({
  selector: 'app-site-table',
  templateUrl: './site-table.component.html',
  styleUrls: ['./site-table.component.css']
})
export class SiteTableComponent implements OnInit {

  @Input() sites!: Site[]; 
  owners!: Owner[];

  constructor(public siteService: SiteService, public ownerService: OwnerService, 
    public modalService: NgbModal) { }

  onDeleteSite(site: Site) {
    this.siteService.deleteSite(site);
  }

  onRestoreSite(site: Site) {
    this.siteService.updateSite({...site, deleted: false})
  }

  onEditSite(site: Site) {
    const modalRef = this.modalService.open(SiteEditComponent)
    modalRef.componentInstance.site = {...site};
  }

  inferOwnerName(site: Site) {
    const owner = this.owners.find(o => o.id == site.ownerId);
    if (owner) {
      return owner.name;
    }
    return "-";
  }

  ngOnInit(): void {
    this.ownerService.fetchAllOwners((owners: Owner[]) => this.owners = owners)
  }

}
