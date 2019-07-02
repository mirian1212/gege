import { Component } from '@angular/core';
import {Login} from './entidade/login';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   login: Login= new Login();

     constructor(private banco: AngularFireDatabase, private rota: Router) { }
      ngOnInit() { }

    salvar(){
      this.banco.list('login').push(this.login);
      this.login= new Login();
      alert('Agora você já pode ir fazer os exercícios!');
    }

}
