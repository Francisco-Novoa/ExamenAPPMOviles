import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from "../api/user.service"


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(public userService: UserService, private router: Router) { }
  canActivate(): boolean {
    if (!this.userService.isLogedIn) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}


