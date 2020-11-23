import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProvPage } from './prov.page';

const routes: Routes = [
  {
    path: '',
    component: ProvPage
  },
  {
    path: ':provId',
    loadChildren: () => import('./provinsi/provinsi.module').then( m => m.ProvinsiPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvPageRoutingModule {}
