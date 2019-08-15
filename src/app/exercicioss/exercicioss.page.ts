import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import {Exercicioss} from '../exercicioss/entidade/exercicioss';

@Component({
  selector: 'app-exercicioss',
  templateUrl: './exercicioss.page.html',
  styleUrls: ['./exercicioss.page.scss'],
})
export class ExerciciossPage implements OnInit {
  exercicioss: Exercicioss = new Exercicioss();
  listaExercicioss: Observable<Exercicioss[]>;
  constructor(private fire: AngularFireDatabase, private rota: Router) {
    this.listaExercicioss= this.fire.list<Exercicioss>('exercicioss').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }
  ngOnInit() { }
  salvar() {
    this.fire.list('exercicioss').push(this.exercicioss);
    this.exercicioss = new Exercicioss();
    this.rota.navigate(['exercicioss']);
  }
}
