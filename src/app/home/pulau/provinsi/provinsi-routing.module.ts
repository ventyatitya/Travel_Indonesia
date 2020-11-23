import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProvinsiPage } from './provinsi.page';

const routes: Routes = [
  {
    path: '',
    component: ProvinsiPage
  },
  {
    path: 'foods',
    loadChildren: () => import('./foods/foods.module').then( m => m.FoodsPageModule)
  },
  {
    path: 'attractions',
    loadChildren: () => import('./attractions/attractions.module').then( m => m.AttractionsPageModule)
  },
  {
    path: 'arts',
    loadChildren: () => import('./arts/arts.module').then( m => m.ArtsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvinsiPageRoutingModule {}
