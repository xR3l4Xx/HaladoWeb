import { Component, Input, OnInit } from '@angular/core';
import { Wagon } from 'app/core/models';

@Component({
  selector: 'app-edit-wagon',
  templateUrl: './edit-wagon.component.html',
  styleUrls: ['./edit-wagon.component.css']
})
export class EditWagonComponent implements OnInit {

  @Input() wagon!: Wagon;

  constructor() { }

  ngOnInit(): void {
  }

}
