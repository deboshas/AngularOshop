import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyOrdersComponent } from './my-orders.component';
import { AuthguardService } from '../shared/authguard.service';

const routes: Routes = [
  { path: '', component: MyOrdersComponent, canActivate: [AuthguardService] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyOrdersRoutingModule { }
