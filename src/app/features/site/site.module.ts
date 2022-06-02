import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SitesListComponent } from './pages/sites-list/sites-list.component';
import { SiteTableComponent } from './components/site-table/site-table.component';
import { SiteEditComponent } from './components/site-edit/site-edit.component';
import { SharedModule } from 'app/shared/shared.module';
import { SiteCreateComponent } from './components/site-create/site-create.component';


@NgModule({
  declarations: [
    SitesListComponent,
    SiteTableComponent,
    SiteEditComponent,
    SiteCreateComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    SharedModule
  ],
  exports: [
    SitesListComponent
  ]
})
export class SiteModule { }
