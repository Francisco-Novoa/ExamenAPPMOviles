import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecursosAlumnoPage } from './recursos-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: RecursosAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecursosAlumnoPageRoutingModule {}
