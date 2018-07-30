import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
// import { User } from '../../classes/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading=false;  // used upon form submission


/*
 * Not essential or entirely related to this component!!
 * *****************************************************
 * Good idea:
 * add an HttpInterceptor that grabs HttpRequests
 * and attaches a JWT (json web token) to it to
 * ensure security and that the request was from
 * an authentic source
 * *****************************************************
*/

  constructor(private router: Router, private authService: AuthService) {
    // declare needed variables like authentication service, alert service, etc...

  }

  ngOnInit() {
    // could call authService.logout() here if you wanna
    // logout upon navigating to this page orrrrr....

    // choose to send to dashboard if already logged in..
    /* moved this from constructor b/c must finish creating component and
     * handle dependency injection on authService before calling its methods
     */
    if(this.authService.isLoggedIn()) {
      console.log('already logged in, sent to dashboard');
      this.router.navigate(['dashboard']);
    }

  }

  submitLogin(form) {
    this.loading = true;
    if(form.valid) {
      console.log(form.value.username);
      this.authService.login(form.value.username, form.value.password);
    }
    
    this.loading = false;
    return false;
  }

}
