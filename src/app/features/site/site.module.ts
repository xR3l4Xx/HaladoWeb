import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SitesListComponent } from './pages/sites-list/sites-list.component';


@NgModule({
  declarations: [
    SitesListComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule
  ],
  exports: [
    SitesListComponent
  ]
})
export class SiteModule { }
