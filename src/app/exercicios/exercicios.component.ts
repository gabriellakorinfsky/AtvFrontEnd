import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.css']
})
export class ExerciciosComponent {
  mensagem: string = 'Olá Mundo';

  linkDaAncora: string = 'https://www.google.com';

  selectText = 'text1';

  fundo='';
  cor='';
  getCor(){
    this.cor='red';
    this.fundo='yellow';
  }
}
