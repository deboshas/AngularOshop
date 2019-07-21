import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { user } from './models/user';
import { UserService } from './user.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) { }

  login() {

    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());


  }

  get AuthStatus() {
    return this.afAuth.authState;
  }

  getAppUser(): Observable<user> {

    return this.AuthStatus.pipe(switchMap(user => {
      return this.userService.getUser(user);
    }))
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);

  }

}
