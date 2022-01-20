import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [],
})
export class HomeModule { }
