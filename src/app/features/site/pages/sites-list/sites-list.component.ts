import { Component, OnInit } from '@angular/core';
import { Site } from 'app/core/models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataStore } from 'app/core/stores';
import { map } from 'rxjs';
import { SiteService } from '../../services/site.service';
import { SiteCreateComponent } from '../../components/site-create/site-create.component';

@Component({
  selector: 'app-sites-list',
  templateUrl: './sites-list.component.html',
  styleUrls: ['./sites-list.component.css']
})
export class SitesListComponent implements OnInit {

  sites: Site[] = [];

  constructor(public siteService: SiteService, public modalService: NgbModal) { }

  addSite() {
    this.modalService.open(SiteCreateComponent);
  }

  ngOnInit(): void {
    this.siteService.fetchAllSites((sites: Site[]) => this.sites = sites.sort((a: Site, b: Site) => a.id - b.id))
  }
}
