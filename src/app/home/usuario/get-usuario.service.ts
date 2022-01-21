import { UsuarioService } from './usuario.service';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetUsuarioService {

  constructor(private novoUsuarioService: UsuarioService) {

  }

  buscarUsuario() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario) =>
          this.novoUsuarioService.getUser(nomeUsuario)
        ),
        map((usuarioExite) =>
          usuarioExite ? { usuarioExistente: true } : null
        ),
        first()
      )
    }
  }
}
