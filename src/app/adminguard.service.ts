import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { map, switchMap } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private userService: UserService, private authServcie: AuthService, private router: Router) { }

  canActivate(router: Route, state: RouterStateSnapshot) {

    return this.authServcie.getAppUser().pipe(map(user => {

      if (user.isAdmin) {
        return true;
      }
      else {


        this.router.navigate(['/']);
        return false;
      }
    }))
  }
}
