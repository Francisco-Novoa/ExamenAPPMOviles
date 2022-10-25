import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  // Estos cargan la pagina
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'no-pass',
    loadChildren: () => import('./no-pass/no-pass.module').then(m => m.NoPassPageModule)
  },
  {
    path: 'docente',
    loadChildren: () => import('./docente/docente.module').then(m => m.DocentePageModule),
    canActivate: [AuthService]
  },
  {
    path: 'qrcode',
    loadChildren: () => import('./qrcode/qrcode.module').then(m => m.QrcodePageModule),
    canActivate: [AuthService]
  },
  {
    path: 'recursos-alumno',
    loadChildren: () => import('./recursos-alumno/recursos-alumno.module').then(m => m.RecursosAlumnoPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./e404/e404.module').then(m => m.E404PageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
