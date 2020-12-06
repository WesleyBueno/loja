import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ClubeComponent } from './clube/clube.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LojasComponent } from './lojas/lojas.component';
import { AuthGuard } from './service/auth.guard';
import { ShopComponent } from './shop/shop.component';
import { TrocaComponent } from './troca/troca.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'clube', component: ClubeComponent},
  {path: 'lojas', component: LojasComponent},
  {path: 'troca', component: TrocaComponent},
<<<<<<< HEAD
  {path: 'blog', component: BlogComponent}

=======
  {path: 'sobre', component: SobreComponent}
>>>>>>> 935dcda6317fdab420cf972f85b2520a10e30848
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }