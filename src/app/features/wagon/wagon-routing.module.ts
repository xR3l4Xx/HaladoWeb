import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WagonsListComponent } from './pages/wagons-list/wagons-list.component';

const routes: Routes = [
  { path: '', component: WagonsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WagonRoutingModule { }
