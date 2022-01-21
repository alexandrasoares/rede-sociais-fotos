import { GetUsuarioService } from './get-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './minusculo.validator';

import { Usuario } from './usuario-interface';
import { UsuarioService } from './usuario.service';
import { usuarioSenhaValidator } from './usuario-senha.validator';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup; // ! permite que a variavel seja null

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private getUserService: GetUsuarioService
  ) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      fullName: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      userName: ['',
        [minusculoValidator],
        [this.getUserService.buscarUsuario()],
      ],
      password: ['']
    }, {
      validators: [usuarioSenhaValidator]
    });
  }

  cadastrarUsuario() {
    const novoUsuario = this.novoUsuarioForm.getRawValue() as Usuario;
  }
}
