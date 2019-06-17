import { Component } from '@angular/core';
import { Pessoa} from './entidade/pessoa';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'cadastro.component',
  templateUrl: 'cadastro.component.html'
})

export class CadastroComponent {

  cadastro: Pessoa= new Pessoa();

  constructor(private banco: AngularFireDatabase) { }

  ngOnInit() { }

  Cadastro() {
    this.banco.list('cadastro').push(this.cadastro);
    this.cadastro = new Pessoa();
    alert('Salvo com sucesso!');
  }

}
