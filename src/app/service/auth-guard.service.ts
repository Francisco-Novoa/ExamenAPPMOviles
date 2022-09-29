import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public authenticationService: AuthenticationService, private router: Router) { }

  canActivate(): boolean {
    if (!this.authenticationService.isAuthenticated()){
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
 
}
