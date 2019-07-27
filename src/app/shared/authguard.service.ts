import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private authServcie: AuthService, private router: Router) { }

  canActivate(router: Route, state: RouterStateSnapshot) {

    return this.authServcie.AuthStatus.pipe(map(user => {
      if (user) {
        return true;
      }

      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;

    }));


  }
}
