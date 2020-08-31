import { Component, OnInit, ViewChild } from '@angular/core';
import { AutenticacaoService } from "../autenticacao.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild("publicacoes") 
  public publicacoes: any

  constructor(private autenticacaoService: AutenticacaoService) { }

  ngOnInit(): void {
  }

  public sair(){
    this.autenticacaoService.sair()
  }

  public atualizaFeed(): void{
    this.publicacoes.construirPublicacoes()
  }

}
