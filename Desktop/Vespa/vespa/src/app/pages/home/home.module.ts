import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { LightboxComponent } from './lightbox/lightbox.component';

@NgModule({
  declarations: [PrincipalComponent, LightboxComponent],
  imports: [CommonModule, HomeRoutingModule],
  bootstrap: [PrincipalComponent],
})
export class HomeModule {}
