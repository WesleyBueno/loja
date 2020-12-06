import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import pagarme from 'pagarme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { TrocaComponent } from './troca/troca.component';
import { LojasComponent } from './lojas/lojas.component';
import { ClubeComponent } from './clube/clube.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    TrocaComponent,
    LojasComponent,
    ClubeComponent,
    CarrinhoComponent,
    CadastrarComponent,
    LoginComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    // pagarme
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
