import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { ReactiveFormsModule } from "@angular/forms"
import { AutenticacaoService } from "./autenticacao.service"
import { AutenticacaoGuard } from "./autenticacao-guard.service"
import { Bd } from "./bd.service"
import { Progresso } from "./progresso.service"

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AcessoComponent } from './acesso/acesso.component';
import { BannerComponent } from './acesso/banner/banner.component';
import { LoginComponent } from './acesso/login/login.component';
import { CadastroComponent } from './acesso/cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { PublicacoesComponent } from './home/publicacoes/publicacoes.component';
import { IncluirPostagemComponent } from './home/incluir-postagem/incluir-postagem.component';

@NgModule({
  declarations: [
    AppComponent,
    AcessoComponent,
    BannerComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    PublicacoesComponent,
    IncluirPostagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [ AutenticacaoService, AutenticacaoGuard, Bd, Progresso ],
  bootstrap: [AppComponent]
})
export class AppModule { }
