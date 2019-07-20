import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isNavbarCollapsed = true;
  //user$: any;
  constructor(private authService: AuthService) {
    //this.user$ = this.authService.AuthStatus;

    // this.afAuth.authState.subscribe(x => {
    //   this.user = x;
    //   console.log('firebase user details', this.user);
    // })
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();

  }

}
