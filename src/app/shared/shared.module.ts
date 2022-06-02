import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SerialNumberPipe } from '../features/wagon/serial-number.pipe';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ],
  exports: [
    NgbModule,
    FormsModule
  ]
})
export class SharedModule { }
