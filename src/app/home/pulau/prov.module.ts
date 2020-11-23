import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProvPageRoutingModule } from './prov-routing.module';

import { ProvPage } from './prov.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProvPageRoutingModule
  ],
  declarations: [ProvPage]
})
export class ProvPageModule {}
