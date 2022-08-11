import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLoggedAdmin!: boolean
  public isLoggedIn!: boolean

  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
    this.isLoggedAdmin = this.userService.isLoggedAdmin()
    this.isLoggedIn = this.userService.isLoggedIn()
  }

  logout() {
    localStorage.removeItem("myToken")
    this.router.navigateByUrl("/login")
  }

}
