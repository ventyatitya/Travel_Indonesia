import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagePulauPageRoutingModule } from './page-pulau-routing.module';

import { PagePulauPage } from './page-pulau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagePulauPageRoutingModule
  ],
  declarations: [PagePulauPage]
})
export class PagePulauPageModule {}
