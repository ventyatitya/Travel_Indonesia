import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PulauPage } from './pulau.page';

const routes: Routes = [
  {
    path: '',
    component: PulauPage
  },
  {
    path: ':idProv',
    loadChildren: () => import('./provinsi/provinsi.module').then( m => m.ProvinsiPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PulauPageRoutingModule {}
