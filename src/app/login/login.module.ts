import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from '../shared/auth.service';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ],
  providers: [AuthService]
})
export class LoginModule { }
