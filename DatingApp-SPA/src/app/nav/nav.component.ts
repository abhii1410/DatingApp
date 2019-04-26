import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authServices: AuthService, private alertify: AlertifyService,
     private route: Router) { }

  ngOnInit() {
  }

  login() {
    this.authServices.login(this.model).subscribe(next => {
      this.alertify.success('logged in successfully');
      }, error => {
        this.alertify.error('login failed');
      }, () => {
        this.route.navigate(['\members']);
      });
  }

  login1() {
    console.log(this.model);
  }

  loggedIn() {
    return this.authServices.loggedIn();
  }

  loggedOut() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    this.route.navigate(['\home']);
  }

}
