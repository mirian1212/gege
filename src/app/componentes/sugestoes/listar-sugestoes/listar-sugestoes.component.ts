import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Sugestoes } from '../entidade/sugestoes';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listar-sugestoes',
  templateUrl: './listar-sugestoes.component.html',
  styleUrls: ['./listar-sugestoes.component.scss'],
})
export class ListarSugestoesComponent implements OnInit {
  listaUsuario: Observable<Sugestoes[]>;
  constructor(private banco: AngularFireDatabase) {
    this.listaUsuario = this.banco.list<Sugestoes>('sugestoes').snapshotChanges().pipe(map(lista => lista.map(linha => ({
      key: linha.payload.key, ...linha.payload.val()
    }))))
  }

  ngOnInit() { }
  excluir(key) {
    this.banco.list('sugestoes').remove(key);
    alert("Excluido");
  }
}
