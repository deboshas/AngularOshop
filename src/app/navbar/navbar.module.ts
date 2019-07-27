import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from '../shared/auth.service';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    SharedModule
  ],
  providers: [AuthService],
  bootstrap: [NavbarComponent]
})
export class NavbarModule { }
