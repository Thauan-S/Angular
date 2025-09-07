import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class MeuFormController{
//gerencia o formulário reativo
    meuForm!:FormGroup;
    constructor(private readonly _fb:FormBuilder){
    // .group ({})É um grupo de FormControls, ou seja, representa todo o formulário ou uma
    // parte dele. Cada campo do formulário é um controle (input, checkbox, etc.).
    this.meuForm=this._fb.group({
      nome:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      endereco:this._fb.group({
        rua:['',Validators.required],
        numero:['',Validators.required]
      }),
      musicas:this._fb.array([
        ['',[Validators.required]],

      ])
    })
    }
    get musicas():FormArray{ // usado para acessar o array do formulário
      return this.meuForm.get('musicas') as FormArray;
    }
    get nomeControl(): FormControl { // usado para acessar o controle do formulário
      return this.meuForm.get('nome') as FormControl;
  }
}
