import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Owner, Site } from 'app/core/models';
import { OwnerService } from 'app/shared/owner.service';
import { map } from 'rxjs';
import { SiteService } from '../../services/site.service';

@Component({
  selector: 'app-site-edit',
  templateUrl: './site-edit.component.html',
  styleUrls: ['./site-edit.component.css']
})
export class SiteEditComponent implements OnInit {

  @Input() site!: Site;
  owners!: Owner[];

  constructor(public siteService: SiteService, public ownerService: OwnerService,
    public activeModal: NgbActiveModal) { }

  onSave() {
    this.siteService.updateSite(this.site);
  }

  ngOnInit(): void {
    this.ownerService.fetchAllOwners((owners: Owner[]) => this.owners = owners)
  }

}
