import { Component } from '@angular/core';
import { Sugestoes } from '../entidade/sugestoes';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'sugestoes-component',
  templateUrl: 'sugestoes.component.html'
})

export class SalvarSugestoesPage {
  sugestoes: Sugestoes = new Sugestoes();
  constructor(private banco: AngularFireDatabase, private rota: Router, private ModalController: ModalController) { }

  ngOnInit() { }

  Sugerir() {
    if (this.sugestoes.sugestoes == null) {
      alert("Não foi possível salvar sua sugestão");

    }
    else {
      this.banco.list('sugestoes').push(this.sugestoes);
      this.sugestoes = new Sugestoes();
      this.rota.navigate(['listar-sugestoes']);
      alert('Salvo com sucesso!');
    }
  }
  salvar() {
    if (this.sugestoes.key == null) {
      this.banco.list('estado').push(this.sugestoes);
      this.sugestoes = new Sugestoes();
      this.rota.navigate(['listar-sugestoes']);
    } else {
      this.banco.object('sugestoes/' + this.sugestoes.key).update(this.sugestoes);
      this.ModalController.dismiss();
    }
  }

}
