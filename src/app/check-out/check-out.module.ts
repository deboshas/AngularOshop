import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckOutRoutingModule } from './check-out-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from '../shared/auth.service';
import { AuthguardService } from '../shared/authguard.service';
import { UserService } from '../shared/user.service';
import { CategoryService } from '../shared/category.service';
import { ProductService } from '../shared/product.service';
import { CheckOutComponent } from './check-out.component';

@NgModule({
  declarations: [CheckOutComponent],
  imports: [
    CommonModule,
    CheckOutRoutingModule,
    SharedModule
  ],
  providers: [AuthService, AuthguardService, UserService, CategoryService
    , ProductService]
})
export class CheckOutModule { }
