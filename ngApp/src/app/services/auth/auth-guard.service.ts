import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
                            //implements CanActivate
export class AuthGuardService implements CanActivate{

  constructor(public authService: AuthService, public router: Router) { }

  canActivate(): boolean {
    if(this.authService.isLoggedIn()) {
        return true;
    }

    //not logged in
    //alert("SQUANCH! You must be logged in first");
    this.router.navigate(['']);
    return false;
  }
}
