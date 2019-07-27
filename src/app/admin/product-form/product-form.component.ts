import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { CategoryService } from 'src/app/shared/category.service';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  categories: any[];
  product: any;
  constructor(private categoryService: CategoryService
    , private productService: ProductService
    , private router: Router
    , private activatedRoute: ActivatedRoute) {

    //load the  catrories dropdwon
    this.categoryService.Categories.subscribe(categories => {

      this.categories = categories;

    })


    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProduct(id).pipe(take(1))
        .subscribe(p => {

          this.product = p;
        })

    }

  }



  ngOnInit() {
  }

  save(product) {

    this.productService.saveProduct(product);
    this.router.navigate(['/admin/products']);
  }

}
