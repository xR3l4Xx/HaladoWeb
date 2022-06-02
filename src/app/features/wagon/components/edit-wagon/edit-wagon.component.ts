import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Owner, Site, Wagon } from 'app/core/models';
import { DataStore } from 'app/core/stores';
import { map } from 'rxjs';

@Component({
  selector: 'app-edit-wagon',
  templateUrl: './edit-wagon.component.html',
  styleUrls: ['./edit-wagon.component.css']
})
export class EditWagonComponent implements OnInit {

  @Input() wagon!: Wagon;
  @Input() saveWagon!: Function;

  owners!: Owner[];
  sites!: Site[];

  constructor(public activeModal: NgbActiveModal, public store: DataStore) { }

  onSave() {
    this.saveWagon(this.wagon);
  }

  ngOnInit(): void {
    this.store.state$
      .pipe(
        map(state => state.sites))
      .subscribe(data => {
        this.sites = data.filter((site: Site) => !site.deleted);
      })

      this.store.state$
      .pipe(
        map(state => state.owners))
      .subscribe(data => {
        this.owners = data;
      })
  }

}
