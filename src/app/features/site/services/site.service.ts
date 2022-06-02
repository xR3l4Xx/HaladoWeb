import { Injectable } from '@angular/core';
import { Site } from 'app/core/models';
import { DataStore } from 'app/core/stores';
import { first, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor(public store: DataStore) { }

  addSite(site: Site) {
    this.store.addSite(site);
  }

  updateSite(site: Site) {
    this.store.updateSite(site);
  }

  fetchAllSites(callback: Function) {
    this.store.state$
      .pipe(
        map(state => state.sites))
      .subscribe(data => {
        callback(data)
      })
  }

  deleteSite(site: Site) {
    site.deleted = true;
    this.updateSite(site);
  }

}
