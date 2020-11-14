import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagePulauPage } from './page-pulau.page';

const routes: Routes = [
  {
    path: '',
    component: PagePulauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagePulauPageRoutingModule {}
