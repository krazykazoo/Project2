import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { User } from '../../classes/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  registerUser(form) {
    if(form.valid) {
      console.log(form.value);
      this.userService.createUser(form.value.username as User)
        .subscribe(user => {
          console.log('subscribed to created user in registerUser in register component')
        });
    }
  }

}
