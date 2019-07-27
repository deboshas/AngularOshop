import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { AdminGuardService } from '../shared/adminguard.service';
import { ProductFormComponent } from './product-form/product-form.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AuthguardService } from '../shared/authguard.service';

const routes: Routes = [

  { path: 'products', component: ManageProductsComponent, canActivate: [AuthguardService, AdminGuardService] },
  { path: 'products/:id', component: ProductFormComponent, canActivate: [AuthguardService, AdminGuardService] },
  { path: 'products/new', component: ProductFormComponent, canActivate: [AuthguardService, AdminGuardService] },
  { path: 'orders', component: AdminOrdersComponent, canActivate: [AuthguardService, AdminGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
