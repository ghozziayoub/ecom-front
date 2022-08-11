import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if (this.userService.isLoggedIn()) {
      if (this.userService.isLoggedAdmin()) {
        this.router.navigateByUrl("/dashboard")
      } else {
        this.router.navigateByUrl("/")
      }
    }
  }

}
