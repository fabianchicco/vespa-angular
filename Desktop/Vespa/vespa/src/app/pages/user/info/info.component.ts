import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Core/authentication/authentication.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  constructor(private auth: AuthenticationService) {}

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
  }
}
