import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger("banner-animation",[
      state(
        "criado", 
        style({opacity: 1}
      )),
      transition(
        "void => criado",[
        style({
          opacity: 0,
          transform: "translate(-50px, 0)"
        }),
        animate("0.5s ease-in-out")
      ])
    ]),
    trigger("painel-animation",[
      state(
        "criado", 
        style({opacity: 1}
      )),
      transition(
        "void => criado",[
        style({
          opacity: 0,
          transform: "translate(50px, 0)"
        }),
        animate("1s ease-in-out", keyframes([
          style({offset: 0.15, opacity: 1, transform: "translateY(0)"}),
          style({offset: 0.86, opacity: 1, transform: "translateY(0)"}),
          style({offset: 0.88, opacity: 1, transform: "translateY(10px)"}),
          style({offset: 0.90, opacity: 1, transform: "translateY(-10px)"}),
          style({offset: 0.92, opacity: 1, transform: "translateY(10px)"}),
          style({offset: 0.94, opacity: 1, transform: "translateY(-10px)"}),
          style({offset: 0.96, opacity: 1, transform: "translateY(10px)"}),
          style({offset: 0.98, opacity: 1, transform: "translateY(-10px)"}),
        ]))
      ])
    ])
  ]
})
export class AcessoComponent implements OnInit {
  public estadoAnimacao: string = "criado"
  public cadastro: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  public alternaPainel(evento: boolean): void{
    this.cadastro = evento ? true : false
  }

  public animacaoInicio(): void{
    //console.log("inicio animação")
  }

  public animacaoFim(): void{
    //console.log("final animação")
  }
}
