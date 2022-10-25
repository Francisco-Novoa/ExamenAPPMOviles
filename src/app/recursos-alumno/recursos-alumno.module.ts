import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecursosAlumnoPageRoutingModule } from './recursos-alumno-routing.module';

import { RecursosAlumnoPage } from './recursos-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecursosAlumnoPageRoutingModule
  ],
  declarations: [RecursosAlumnoPage]
})
export class RecursosAlumnoPageModule {}
