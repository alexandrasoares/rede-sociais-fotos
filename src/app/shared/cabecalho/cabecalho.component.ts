import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from '../../autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {

  user$ = this.usuarioService.retornarUSuario();

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
  ) { }

  deslogar() {
    this.usuarioService.fazerLogout();
    this.router.navigate(['']);
  }
}
