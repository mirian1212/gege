import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {CadastroComponent} from './componentes/cadastro/cadastro.component';
import {LoginComponent} from './componentes/login/login.component';
import {SobreComponent} from './componentes/sobre/sobre.component';
import {ExercicioComponent} from './componentes/exercicio/exercicio.component';
import {CalendarioComponent} from './componentes/calendario/calendario.component';
import {LoginecadastroComponent} from './componentes/loginecadastro/loginecadastro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CadastroComponent, LoginComponent, ExercicioComponent, CalendarioComponent, SobreComponent, LoginecadastroComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
