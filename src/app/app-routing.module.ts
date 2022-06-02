import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "wagon",
        loadChildren: () => import("./features/wagon/wagon.module").then(
          (x) => x.WagonModule
        )
      }
    ]
  },
  { path: 'site', loadChildren: () => import('./features/site/site.module').then(m => m.SiteModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
