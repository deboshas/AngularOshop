import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) {


  }

  saveProduct(product) {
    this.db.list("/products").push(product);


  }
  getAll() {
    // return this.db.list("/products").valueChanges();

    return this.db.list("/products").snapshotChanges()
      .pipe(map(products => {

        return products.map(p => ({ key: p.key, ...p.payload.val() }))

      }));


  }

  getProduct(productId) {

    return this.db.object("/products/" + productId).valueChanges();
  }
}
