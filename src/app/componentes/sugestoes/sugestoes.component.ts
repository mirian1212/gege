import { Component } from '@angular/core';
import {Sugestoes} from './entidade/sugestoes';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector:'sugestoes-component',
  templateUrl:'sugestoes.component.html'
})

export class SugestoesComponent{
     sugestoes: Sugestoes= new Sugestoes();
  constructor (private banco: AngularFireDatabase, private rota: Router) { }

    ngOnInit() { }

 Sugerir(){
   if(this.sugestoes.sugestoes == null){
     alert("Não foi possível salvar sua sugestão");

   }
   else{
   this.banco.list('sugestoes').push(this.sugestoes);
   this.sugestoes = new Sugestoes();
   this.rota.navigate (['listar-sugestoes']);
   alert('Salvo com sucesso!');
 }
 }

}
