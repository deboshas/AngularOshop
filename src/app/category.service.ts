import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  get Categories() {

    this.db.list("/Categories").valueChanges().subscribe(cat => {
      console.log(cat);
    })

    return this.db.list("/Categories").valueChanges();

  }
}
