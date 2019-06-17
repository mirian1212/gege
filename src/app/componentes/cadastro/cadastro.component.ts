import { Component } from '@angular/core';
import { Cadastro } from './entidade/cadastro';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'cadastro.component',
  templateUrl: 'cadastro.component.html'
})

export class CadastroComponent {

  cadastro: Cadastro = new Cadastro();

  constructor(private banco: AngularFireDatabase) { }

  ngOnInit() { }

  Cadastro() {
    this.banco.list('cadastro').push(this.cadastro);
    this.cadastro = new Cadastro();
    alert('Salvo com sucesso!');
  }

}
