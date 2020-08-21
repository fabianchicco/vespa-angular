import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Core/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthenticationService) {}

  user;
  pass;

  ngOnInit(): void {}

  login() {
    this.auth.login(this.user, this.pass);
  }
}
