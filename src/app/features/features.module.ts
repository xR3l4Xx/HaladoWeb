import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { WagonComponent } from './wagon/wagon.component';



@NgModule({
  declarations: [
    IndexComponent,
    WagonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
