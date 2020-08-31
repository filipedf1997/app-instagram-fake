import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms"
import { Usuario } from "../usuario.model"
import { AutenticacaoService } from "../../autenticacao.service"

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  @Output() public alternadorC: EventEmitter<boolean> = new EventEmitter<boolean>()

  public formulario: FormGroup = new FormGroup({
    "email": new FormControl(null),
    "nome_completo": new FormControl(null),
    "nome_usuario": new FormControl(null),
    "senha": new FormControl(null)
  })

  constructor(private autenticacaoService: AutenticacaoService) { }

  ngOnInit(): void {
  }

  public exibeLogin(): void{
    this.alternadorC.emit(false)
  }

  public submeteCadastro(): void{
    let usuario: Usuario = new Usuario(
      this.formulario.value.email,
      this.formulario.value.nome_completo,
      this.formulario.value.nome_usuario,
      this.formulario.value.senha
    )
    this.autenticacaoService.gravaCadastro(usuario)
      .then(() => this.exibeLogin())
  }
}
