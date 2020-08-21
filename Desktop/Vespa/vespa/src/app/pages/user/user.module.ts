import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, InfoComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule],
})
export class UserModule {}
