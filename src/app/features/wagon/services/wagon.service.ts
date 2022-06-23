import { Injectable } from '@angular/core';
import { DataStore } from 'app/core/stores';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WagonService {

  constructor(public store: DataStore) { }

  fetchAllWagons(callback: Function){
    this.store.state$
    .pipe(
      map(state => state.wagons)
    )
    .subscribe(data => {
      callback(data)
    });
  }

  fetchBySiteId(siteId: number, callback: Function){
    this.store.state$
    .pipe(
      map(state => state.wagons.filter(wagon => wagon.siteId == siteId))
    )
    .subscribe(data => {
      callback(data)
    });
  }
}
