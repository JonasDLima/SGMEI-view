import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/components/models/user';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  usuario = new User();

  constructor(
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
  }

  authenticate() {
    this.loginService.singIn(this.usuario)
  }

}
