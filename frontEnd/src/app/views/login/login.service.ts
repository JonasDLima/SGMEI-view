import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/app-constants';
import { User } from 'src/app/components/models/user';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private http: HttpClient
    ) { }

  singIn(usuario: User){
    return this.http.post(String(AppConstants.baseLogin), JSON.stringify(usuario)).subscribe(response => {
      if(response && JSON.parse(JSON.stringify(response)).Authorization) {
        const token = JSON.parse(JSON.stringify(response)).Authorization;
        localStorage.setItem("token", token);
        return true;
      }

      return false;
    });
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem("token");
    return token;
  }

  getTokenExpirationDate(token: string): any {
    const decoded: any = jwt_decode(token);

    if(decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token: string): boolean {
    if(!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if(date === undefined){
      return false;
    }

    return !(date.valueOf() > new Date().valueOf())
  }

  isLogedIn() {
    const token = this.getAuthorizationToken();
    if(!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }
}
