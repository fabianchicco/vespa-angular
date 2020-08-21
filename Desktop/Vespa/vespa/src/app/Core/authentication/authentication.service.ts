import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  API_URL = 'http://icaro.cdgweb.com.ar/public/';
  token;
  isLogged = false;
  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem('icaro_token');
    if (token) {
      this.token = token;
      this.isLogged = true;
      this.router.navigate(['user/info']);
    }
  }

  login(user, pass) {
    const data = {
      user_username: user,
      user_password: pass,
    };

    this.http.post(this.API_URL + 'login', { data }).subscribe(
      (res) => {
        localStorage.setItem('icaro_token', this.token);
        let response: any = res;
        this.token = response.token;
        this.isLogged = true;
        localStorage.setItem('icaro_token', this.token);
        this.router.navigate(['user/info']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  logout() {
    this.token = null;
    this.isLogged = false;
    localStorage.removeItem('icaro_token');
    this.router.navigate(['/principal']);
  }
}
