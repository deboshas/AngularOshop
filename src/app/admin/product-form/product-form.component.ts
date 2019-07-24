import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product: any;
  constructor(private categorySrrvice: CategoryService
    , private productService: ProductService
    , private router: Router
    , private activatedRoute: ActivatedRoute) {


    this.categories$ = this.categorySrrvice.Categories;
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {


    }

  }



  ngOnInit() {
  }

  save(product) {

    this.productService.saveProduct(product);
    this.router.navigate(['/admin/products']);
  }

}
