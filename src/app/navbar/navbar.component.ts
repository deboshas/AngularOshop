import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { user } from '../models/user';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isNavbarCollapsed = true;
  appUser: user;
  constructor(private authService: AuthService) {
    //this.user$ = this.authService.AuthStatus;

    // this.afAuth.authState.subscribe(x => {
    //   this.user = x;
    //   console.log('firebase user details', this.user);
    // })
    this.authService.getAppUser().subscribe(user => this.appUser = user);

  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();

  }

}
