import { Injectable } from '@angular/core';
import { DataStore } from 'app/core/stores';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(public store: DataStore) { }

  fetchAllOwners(callback: Function) {
    this.store.state$
      .pipe(
        map(state => state.owners))
      .subscribe(data => {
        callback(data)
      })
  }
}
