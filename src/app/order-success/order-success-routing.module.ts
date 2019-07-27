import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderSuccessComponent } from './order-success.component';
import { AuthguardService } from '../shared/authguard.service';

const routes: Routes = [
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthguardService] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthguardService]
})
export class OrderSuccessRoutingModule { }
