import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router, private authService: AuthService) {
        // every time someone clicks on new router link
        router.events.subscribe((navEnd: NavigationEnd) => this.currentUrl = navEnd.url);
  }

  ngOnInit() {
  }

}
