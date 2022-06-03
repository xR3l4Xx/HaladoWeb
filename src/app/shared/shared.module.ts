import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SerialNumberPipe } from '../features/wagon/serial-number.pipe';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    DataTablesModule
  ],
  exports: [
    NgbModule,
    FormsModule,
    DataTablesModule
  ]
})
export class SharedModule { }
