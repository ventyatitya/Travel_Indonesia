import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PulauPageRoutingModule } from './pulau-routing.module';

import { PulauPage } from './pulau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PulauPageRoutingModule
  ],
  declarations: [PulauPage]
})
export class PulauPageModule {}
