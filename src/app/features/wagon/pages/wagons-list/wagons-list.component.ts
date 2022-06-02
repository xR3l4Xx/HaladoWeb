import { Component, OnInit } from '@angular/core';
import { Wagon } from 'app/core/models';
import { DataStore } from 'app/core/stores';
import { takeUntil, map } from 'rxjs';

@Component({
  selector: 'app-wagons-list',
  templateUrl: './wagons-list.component.html',
  styleUrls: ['./wagons-list.component.css']
})
export class WagonsListComponent implements OnInit {

  wagons: Wagon[] = [];

  constructor(public store: DataStore) { }

  addWagon() {
    this.store.addWagon({
      id: -1,
      serialNumber: "asdasds",
      yearOfProduction: 1,
      ownerId: 1,
      deleted: false,
      siteId: 1
    })
  }

  ngOnInit(): void {
    this.store.state$
      .pipe(
        map(state => state.wagons))
      .subscribe(data => {
        this.wagons = data;
      })
  }

}
