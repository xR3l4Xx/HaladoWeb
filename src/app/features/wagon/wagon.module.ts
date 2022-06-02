import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WagonRoutingModule } from './wagon-routing.module';
import { WagonsListComponent } from './pages/wagons-list/wagons-list.component';


@NgModule({
  declarations: [
    WagonsListComponent
  ],
  imports: [
    CommonModule,
    WagonRoutingModule
  ],
  exports: [
    WagonsListComponent
  ]
})
export class WagonModule { }
