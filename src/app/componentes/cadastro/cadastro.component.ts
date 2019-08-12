import { Component } from '@angular/core';
import { Pessoa } from './entidade/pessoa';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Estado } from '../../estado/entidade/estado';
import { Cidade } from '../../cidade/entidade/cidade';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'cadastro.component',
  templateUrl: 'cadastro.component.html',
  styleUrls: ['cadastro.component.scss']
})

export class CadastroComponent {

  cadastro: Pessoa = new Pessoa();
  cidade: Cidade = new Cidade();
  listaEstado: Observable<Estado[]>;
  constructor(private fire: AngularFireDatabase, private rota: Router) {
    this.listaEstado = this.fire.list<Estado>('estado').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
}
  ngOnInit() { }

  Cadastro() {
    this.fire.list('estado').push(this.cadastro);
    this.cadastro = new Pessoa();
    this.rota.navigate(['salvar']);
    alert('Salvo com sucesso!');
  }
  Cadastro2() {
    this.fire.list('cidade').push(this.cidade);
    this.cadastro = new Pessoa();
    this.rota.navigate(['salvar']);
    alert('Salvo com sucesso!');
  }
}
