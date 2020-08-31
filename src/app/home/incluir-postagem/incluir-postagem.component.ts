import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Bd } from "../../bd.service"
import * as firebase from 'firebase';
import { Progresso } from "../../progresso.service"
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-incluir-postagem',
  templateUrl: './incluir-postagem.component.html',
  styleUrls: ['./incluir-postagem.component.css']
})
export class IncluirPostagemComponent implements OnInit {
  public email: string
  public imagem: any
  @Output() public atualizaFeed: EventEmitter<any> = new EventEmitter()

  public modalStatus: string = "pendente"
  public porcentagemPublicacao: number = 0

  public formulario: FormGroup = new FormGroup({
    "titulo": new FormControl(null)
  })

  constructor(private bdService: Bd, public progresso: Progresso) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email
    })
  }

  public publicar(): void{
    this.bdService.publicar({
      email: this.email,
      titulo: this.formulario.value.titulo,
      imagem: this.imagem
    })

    let acompanhaProgresso = interval(1500)
    let acompanhaSubscription: Subscription

    acompanhaSubscription = acompanhaProgresso.subscribe(() => {
        this.modalStatus = "andamento"
        this.porcentagemPublicacao = Math.round((this.progresso.estado.bytesTransferred / this.progresso.estado.totalBytes) * 100)
        if(this.progresso.status === "concluido"){
          this.modalStatus = "concluido"
          this.atualizaFeed.emit()
          acompanhaSubscription.unsubscribe()
        }
      }
    )
  }

  public preparaImagemUpload(imagem: any){
    this.imagem = imagem[0]
  }

}
