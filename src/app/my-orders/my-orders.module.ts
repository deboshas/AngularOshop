import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersRoutingModule } from './my-orders-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthguardService } from '../shared/authguard.service';
import { MyOrdersComponent } from './my-orders.component';

@NgModule({
  declarations: [MyOrdersComponent],
  imports: [
    CommonModule,
    MyOrdersRoutingModule,
    SharedModule
  ], providers: [AuthguardService]
})
export class MyOrdersModule { }
