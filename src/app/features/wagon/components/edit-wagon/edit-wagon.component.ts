import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Wagon } from 'app/core/models';

@Component({
  selector: 'app-edit-wagon',
  templateUrl: './edit-wagon.component.html',
  styleUrls: ['./edit-wagon.component.css']
})
export class EditWagonComponent implements OnInit {

  @Input() wagon!: Wagon;
  @Input() saveWagon!: Function;

  constructor(public activeModal: NgbActiveModal) { }

  onSave() {
    this.saveWagon(this.wagon);
  }

  ngOnInit(): void {
    
  }

}
