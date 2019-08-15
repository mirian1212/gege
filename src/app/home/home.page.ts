import { Component } from '@angular/core';
import { Login } from './entidade/login';
//import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
//import { Usuario } from '../entidade/usuario';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //  usuario: Usuario = new Usuario();
  login: Login = new Login();

  constructor(private afAuth: AngularFireAuth, private rota: Router) { } //private banco: AngularFireDatabase,
  ngOnInit() { }
  //salvar(){
  //  this.banco.list('login').push(this.login);
  //  this.login= new Login();
  //  alert('Agora você já pode ir fazer os exercícios!');
  //  }
  logar() {
    this.afAuth.auth.signInWithEmailAndPassword(this.login.email, this.login.senha).then(
      () => { this.rota.navigate(['exercicio']); }
    ).catch((erro) => alert('Email ou senha errados'));
  }
  logout() {
    this.afAuth.auth.signOut();
    this.rota.navigate(['/']);
  }
}
