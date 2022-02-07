import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, User } from 'src/app/components/models/user';
import jwt_decode from 'jwt-decode';
import { ResponseAuth } from 'src/app/components/models/ResponseAuth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "http://localhost:8080"

  constructor(
    private http: HttpClient
    ) { }

  async singIn(usuario: Auth): Promise<boolean>{
    let _response = false;
    await this.http.post<ResponseAuth>(`${this.url}/auth`, usuario)
      .subscribe(response => {
        localStorage.setItem("token", response.token);
        _response = true;
      },
      error => {
        console.log(error)
      }
    );
    return _response;
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
