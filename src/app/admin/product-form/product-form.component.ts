import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  constructor(private categorySrrvice: CategoryService
    , private productService: ProductService) {
    this.categories$ = this.categorySrrvice.Categories;



  }

  ngOnInit() {
  }

  save(product) {

    this.productService.saveProduct(product);
  }

}
