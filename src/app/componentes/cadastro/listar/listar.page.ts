import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Pessoa } from '../entidade/pessoa';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  listaUsuario: Observable<Pessoa[]>;
  constructor(private banco: AngularFireDatabase) {
    this.listaUsuario = this.banco.list<Pessoa>('cadastro').snapshotChanges().pipe(map(lista => lista.map(linha => ({
      key: linha.payload.key, ...linha.payload.val()
    }))));
  }

  ngOnInit() {
  }
}
