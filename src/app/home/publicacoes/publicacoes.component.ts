import { Component, OnInit } from '@angular/core';
import { Bd } from "../../bd.service"
import * as firebase from 'firebase';

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.css']
})
export class PublicacoesComponent implements OnInit {
  private email: string
  public publicacoes: any

  constructor(private bd: Bd) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email

      this.construirPublicacoes()

    })
  }

  public construirPublicacoes(): void{
    this.bd.consultaPublicacao(this.email)
      .then((pubResposta: any) => this.publicacoes = pubResposta)
  }

}
