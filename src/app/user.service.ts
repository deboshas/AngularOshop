import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { user } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {

    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email

    })
  }

  getUser(user: firebase.User): Observable<user> {

    return this.db.object<user>('/users/' + user.uid).valueChanges();


  }
}
