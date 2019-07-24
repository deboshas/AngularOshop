import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products: any[];
  displayedColumns: string[] = ['Title', 'Price', 'Action'];

  constructor(private productService: ProductService) {


    this.productService.getAll().subscribe(products => {

      this.products = products;
      console.log(this.products);
    })

  }

  ngOnInit() {
  }

}
