import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { CheckOutModule } from './check-out/check-out.module';
import { LoginModule } from './login/login.module';
import { MyOrdersModule } from './my-orders/my-orders.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { NavbarModule } from './navbar/navbar.module';
import { OrderSuccessModule } from './order-success/order-success.module';
import { ProductsModule } from './products/products.module';
import { AuthService } from './shared/auth.service';
import { UserService } from './shared/user.service';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    AppRoutingModule,
    NavbarModule,
    HomeModule,
    AdminModule,
    CheckOutModule,
    MyOrdersModule,
    ShoppingCartModule,
    NavbarModule,
    OrderSuccessModule,
    ProductsModule,
  ],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
