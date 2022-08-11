import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup

  constructor(private fb: FormBuilder, public userService: UserService, public router: Router) {
    this.loginForm = this.fb.group({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
    if (this.userService.isLoggedIn()) {
      if (this.userService.isLoggedAdmin()) {
        this.router.navigateByUrl("/dashboard")
      } else {
        this.router.navigateByUrl("/")
      }
    }
  }

  login() {
    let data = this.loginForm.value
    let user = new User(undefined, undefined, undefined, undefined, data.email, data.password)

    this.userService.login(user).subscribe({
      next: (result) => {
        localStorage.setItem("myToken", result.token)

        let connectedUser = this.userService.decodeToken(result.token)

        if (connectedUser.role == "admin") {
          this.router.navigateByUrl("/dashboard")
        } else {
          this.router.navigateByUrl("/")
        }

      },
      error: (err) => {
        console.log(err);
      }
    })

  }

}
