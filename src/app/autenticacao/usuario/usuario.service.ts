import { Injectable } from '@angular/core';

import { TokenService } from './../token.service';
import { Usuario } from './usuario';

import jwt_decode from 'jwt-decode'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarioSubeject = new BehaviorSubject<Usuario>({});

  constructor(private tokenService: TokenService) {
    if (this.tokenService.validarToken()) {
      this.decodificarJWT();
    }
  }

  salvarToken(token: string) {
    this.tokenService.salvarToken(token);
  }

  retornarUSuario() {
    return this.usuarioSubeject.asObservable();
  }

  fazerLogout() {
    this.tokenService.limparToken();
    this.usuarioSubeject.next({});
  }

  validarLogin() {
    return this.tokenService.validarToken();
  }

  private decodificarJWT() {
    const token = this.tokenService.retornarToken();
    const usuario = jwt_decode(token) as Usuario;
    this.usuarioSubeject.next(usuario);
  }
}
