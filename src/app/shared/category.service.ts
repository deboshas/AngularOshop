import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';
import { Key } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  get Categories() {

    // this.db.list<any>("/Categories").snapshotChanges()
    //   .pipe(
    //     map(changes => {

    //       return changes.map(c => { Key: c.payload.key, ...c.payload.val() })

    //     }




    //     )



    return this.db.list("/Categories").snapshotChanges()
      .pipe(map(products => {

        return products.map(p => ({ key: p.key, ...p.payload.val() }))

      }));



  }
}
