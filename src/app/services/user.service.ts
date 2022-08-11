import { Injectable } from '@angular/core';
import { BaseService } from './base.service'
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUsersUrl = BaseService.baseUrl + "/users"

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post<any>(this.baseUsersUrl + "/login", user)
  }

  isLoggedIn() {
    let token = localStorage.getItem("myToken")
    if (token) {
      return true
    } else {
      return false
    }
  }

  isLoggedAdmin() {
    let token = localStorage.getItem("myToken")
    if (token) {

      if (this.decodeToken(token).role == "admin") {
        return true
      } else {
        return false
      }

    } else {
      return false
    }
  }

  isLoggedClient() {
    let token = localStorage.getItem("myToken")
    if (token) {
      if (this.decodeToken(token).role == "client") {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }


  decodeToken(token: string) {
    const helper = new JwtHelperService();

    const decodedToken = helper.decodeToken(token)

    return decodedToken
  }

}
