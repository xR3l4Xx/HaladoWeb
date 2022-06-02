import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WagonRoutingModule } from './wagon-routing.module';
import { WagonsListComponent } from './pages/wagons-list/wagons-list.component';
import { EditWagonComponent } from './components/edit-wagon/edit-wagon.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    WagonsListComponent,
    EditWagonComponent
  ],
  imports: [
    CommonModule,
    WagonRoutingModule,
    SharedModule
  ],
  exports: [
    WagonsListComponent
  ]
})
export class WagonModule { }
