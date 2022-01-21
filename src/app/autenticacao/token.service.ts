import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  retornarToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  salvarToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  limparToken() {
    localStorage.removeItem(KEY);
  }

  validarToken() {
    return !! this.retornarToken();
  }
}
