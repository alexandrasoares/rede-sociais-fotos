import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario-interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  createUser(novoUsuario: Usuario) {
    return this.http.post('http://localhost:300/user/signup', novoUsuario);
  }

  getUser(nomeUsuario: string) {
    return this.http.get(`http://localhost:300/user/exists/${nomeUsuario}`)
  }
}
