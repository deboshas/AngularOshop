import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderSuccessRoutingModule } from './order-success-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OrderSuccessComponent } from './order-success.component';

@NgModule({
  declarations: [OrderSuccessComponent],
  imports: [
    CommonModule,
    OrderSuccessRoutingModule,
    SharedModule
  ]
})
export class OrderSuccessModule { }
