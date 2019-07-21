import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AuthguardService } from './authguard.service';
import { AdminGuardService } from './adminguard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthguardService] },
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthguardService] },
  { path: 'admin/products', component: ManageProductsComponent, canActivate: [AuthguardService, AdminGuardService] },
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthguardService, AdminGuardService] },
  { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthguardService, AdminGuardService] },
  { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthguardService] }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
