import { Component, OnInit } from '@angular/core';
import { Site } from 'app/core/models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataStore } from 'app/core/stores';
import { map } from 'rxjs';

@Component({
  selector: 'app-sites-list',
  templateUrl: './sites-list.component.html',
  styleUrls: ['./sites-list.component.css']
})
export class SitesListComponent implements OnInit {

  sites: Site[] = [];

  constructor(public store: DataStore, public modalService: NgbModal) { }

  addSite() {

  }

  openEditSiteModal(site: Site) {

  }

  ngOnInit(): void {
    this.store.state$
      .pipe(
        map(state => state.sites))
      .subscribe(data => {
        this.sites = data.sort((a, b) => a.id - b.id);
      })
  }

}
