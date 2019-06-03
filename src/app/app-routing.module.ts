import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {CadastroComponent} from './componentes/cadastro/cadastro.component';
import { LoginComponent } from './componentes/login/login.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { CalendarioComponent } from './componentes/calendario/calendario.component';
import {ExercicioComponent} from './componentes/exercicio/exercicio.component';
import {LoginecadastroComponent} from './componentes/loginecadastro/loginecadastro.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'exercicio', component: ExercicioComponent},
  { path: 'login', component: LoginComponent},
  { path: 'calendario', component: CalendarioComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'loginecadastro', component: LoginecadastroComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
