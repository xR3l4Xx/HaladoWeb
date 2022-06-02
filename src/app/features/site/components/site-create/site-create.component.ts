import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Owner, Site } from 'app/core/models';
import { OwnerService } from 'app/shared/owner.service';
import { SiteService } from '../../services/site.service';

@Component({
  selector: 'app-site-create',
  templateUrl: './site-create.component.html',
  styleUrls: ['./site-create.component.css']
})
export class SiteCreateComponent implements OnInit {

  site!: Site;
  owners!: Owner[];

  constructor(public siteService: SiteService, public ownerService: OwnerService,
    public activeModal: NgbActiveModal) { }

  onSave() {
    this.siteService.addSite(this.site);
  }

  ngOnInit(): void {
    this.ownerService.fetchAllOwners((owners: Owner[]) => this.owners = owners)
    this.site = {
      id: -1,
      code: "",
      postalCode: 0,
      name: "",
      deleted: false,
      ownerId: -1
    }
  }

}
