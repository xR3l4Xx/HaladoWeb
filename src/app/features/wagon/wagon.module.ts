import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WagonRoutingModule } from './wagon-routing.module';
import { WagonsListComponent } from './pages/wagons-list/wagons-list.component';
import { EditWagonComponent } from './components/edit-wagon/edit-wagon.component';
import { SharedModule } from 'app/shared/shared.module';
import { CreateWagonComponent } from './components/create-wagon/create-wagon.component';
import { SerialNumberPipe } from 'app/features/wagon/serial-number.pipe';


@NgModule({
  declarations: [
    WagonsListComponent,
    EditWagonComponent,
    CreateWagonComponent,
    SerialNumberPipe
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
