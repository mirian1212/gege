import { Component } from '@angular/core';
import {Login} from './entidade/login';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   login: Login= new Login();

     constructor(private banco: AngularFireDatabase) { }
      ngOnInit() { }

    salvar(){
      this.banco.list('login').push(this.login);
      this.login= new Login();
      alert('Agora você já pode ir fazer os exercícios!');
    }

}
