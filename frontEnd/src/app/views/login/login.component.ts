import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, User } from 'src/app/components/models/user';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  usuario: Auth = {
    email: "adm@email.com",
    password: "@1234"
  };

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  async authenticate():Promise<void>{
    let isLogin = await this.loginService.singIn(this.usuario);
    if(isLogin){
      this.router.navigate(["/"]);
    }
  }

}
