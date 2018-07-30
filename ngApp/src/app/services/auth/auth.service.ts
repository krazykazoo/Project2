import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../../classes/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  authenticated = false;

  constructor(private http: HttpClient, private router: Router) { 
    //this.setAuthState();

  }

  login(username: string, password: string) {
    return this.http.post<User>('http://localhost:8080/data/users/login', {"username": username, "password": password}).subscribe(
      user => {
        if(user && user.username) {
          this.user = user;
          this.authenticated = true;
          console.log(`logged in as user id: ${user.id} and username: ${user.username}`);
          this.router.navigate(['/dashboard']);
        } else {
          console.log("invalid or not working, send error message");
          //send error message
        }
    });
  }

  private setAuthState() {
    this.http.get<User>('url/getSession').subscribe(
      (user) => {
        if(user) {
          this.authenticated = true;
          this.user = user;
          console.log(this.user);
        } else {
          this.authenticated = false;
        }
      }
    );
  }

  //not sure if i should be checking this from server-side or just client isLoggedIn variable
  isLoggedIn() {
    if(this.authenticated == false) {
      return false;
    } else {
      return true;
    }
  }

  getCurrentUser(): User {
    return this.user;
  }


  logout() {
    console.log("squanch");

    this.http.post('logout', {}).subscribe(
      () => { console.log("successfully logged out"); },
      () => { console.log("error logging out"); },
      () => {
        //going to log out on client side whether successful or not
        this.authenticated = false;
        this.router.navigate(['']); 
      }
    );
  }
}
