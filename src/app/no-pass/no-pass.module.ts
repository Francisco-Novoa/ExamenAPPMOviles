import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { NoPassPageRoutingModule } from './no-pass-routing.module';

import { NoPassPage } from './no-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NoPassPageRoutingModule
  ],
  declarations: [NoPassPage]
})
export class NoPassPageModule { }

