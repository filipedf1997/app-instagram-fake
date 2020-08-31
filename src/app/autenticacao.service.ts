import { Usuario } from "./acesso/usuario.model"
import * as firebase from "firebase"
import { Router } from "@angular/router"
import { Injectable } from "@angular/core"

@Injectable()
export class AutenticacaoService{
    public tokenId: string

    constructor(private router: Router){}

    public gravaCadastro(usuario: Usuario): Promise<any>{
        return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then(() => {
                delete usuario.senha
                firebase.database().ref(`detalhe_usuario/${btoa(usuario.email)}`)
                    .set(usuario)
            })
            .catch((erro: Error) => console.log(erro))
    }

    public autenticar(email: string, senha: string): void{
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(() => {
                firebase.auth().currentUser.getIdToken()
                    .then((idToken: string) => {
                        this.tokenId = idToken
                        localStorage.setItem("tokenId", this.tokenId)
                        this.router.navigate(["/home"])
                    })
            })
            .catch((erro: Error) => console.log(erro))
    }

    public autenticado(): boolean{
        if(this.tokenId === undefined && localStorage.getItem("tokenId") !== null)
            this.tokenId = localStorage.getItem("tokenId")

        if(this.tokenId === undefined)
            this.router.navigate(["/"])

        return this.tokenId !== undefined
    }

    public sair(): void{
        firebase.auth().signOut()
            .then(() => {
                localStorage.removeItem("tokenId")
                this.tokenId = undefined
                this.router.navigate(["/"])
            })
    }
}