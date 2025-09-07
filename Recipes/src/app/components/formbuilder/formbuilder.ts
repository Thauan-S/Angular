import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MeuFormController} from './meu-form-controller';

@Component({
  selector: 'app-formbuilder',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formbuilder.html',
  styleUrl: './formbuilder.css'
})
export class Formbuilder  extends MeuFormController{

 // no nome da classe é melhor usar FormBuildComponent.... FormBuilder já é reservado
onSubmit() {
  console.log('onFormSubmit =>', this.meuForm.value);
}
  constructor(
    // o nome  com _ não pode ser igual ao da classe que eu extendo
   readonly _fbMain:FormBuilder
  )
    {
      // envia para a classe extendida
      super(_fbMain)
    }
  removerMusica(_t23: any) {
    this.musicas.removeAt(_t23);
}
adicionarMusica() {

  this.musicas.push(this._fbMain.control(''));
}
}
