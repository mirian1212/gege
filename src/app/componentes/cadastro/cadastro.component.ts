import { Component } from '@angular/core';
import { Pessoa} from './entidade/pessoa';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'cadastro.component',
  templateUrl: 'cadastro.component.html',
  styleUrls: ['cadastro.component.scss']
})

export class CadastroComponent {

  cadastro: Pessoa= new Pessoa();

  constructor(private banco: AngularFireDatabase, private rota: Router) { }

  ngOnInit() { }

  Cadastro() {
    this.banco.list('cadastro').push(this.cadastro);
    this.cadastro = new Pessoa();
    this.rota.navigate(['listar']);
    alert('Salvo com sucesso!');
  }

}
