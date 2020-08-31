import * as firebase from 'firebase'
import { Injectable } from '@angular/core'
import { Progresso } from "./progresso.service"

@Injectable()
export class Bd{
    constructor(public progresso: Progresso){}

    public publicar(postagem: any): void{

        firebase.database().ref(`publicacoes/${btoa(postagem.email)}`)
            .push({titulo: postagem.titulo})
            .then((resposta: any) => {
                let nomeImg: any = resposta.key 
        
                firebase.storage().ref()
                .child(`imagens/${nomeImg}`)
                .put(postagem.imagem)
                .on(firebase.storage.TaskEvent.STATE_CHANGED,
                    (snapshot: any) => {
                        this.progresso.status = "andamento"
                        this.progresso.estado = snapshot
                    },
                    (error: Error) => {
                        console.log(error)
                        this.progresso.status = "erro"
                    },
                    () => {
                        this.progresso.status = "concluido"
                    }
                )
            })
    }

    public consultaPublicacao(email: string): Promise<any> {
        return new Promise((resolve, reject) => {

            firebase.database().ref(`publicacoes/${btoa(email)}`)
            .orderByKey()
            .once("value")
            .then((snapshot: any) => {
                let publicacoes: Array<any> = []
                //console.log(snapshot.val())
                snapshot.forEach((childSnapshot: any) => {
                    let publicacao = childSnapshot.val()
                    publicacao.key = childSnapshot.key
                    publicacoes.push(publicacao)
                })
                
                return publicacoes.reverse()
            })
            .then((publicacoes: any) => {
                publicacoes.forEach((publicacao: any) => {
                    
                    firebase.storage().ref()
                        .child(`imagens/${publicacao.key}`)
                        .getDownloadURL()
                        .then((url: string) => {
                            publicacao.url_imagem = url
                
                            firebase.database().ref(`detalhe_usuario/${btoa(email)}`)
                                .once("value")
                                .then((snapshot: any) => {
                                    publicacao.nome = snapshot.val().nome_usuario
                                })
                        })
    
                    resolve(publicacoes)
                })
                //console.log(publicacoes)
            })
        })
    }
}