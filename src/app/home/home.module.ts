import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HomeComponent
  ],
  providers: [],
})
export class HomeModule { }
