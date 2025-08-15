import { Component, EventEmitter, inject, Input, input, Output, output } from '@angular/core';
import { Service } from '../../core/services/service';
//nessa classe deixo toda a lógica do meu componente
@Component({
  selector: 'app-home',// define o nome do componente para que ele possa ser usado em outros componentes ou templates
  standalone: true,
  imports: [], // módulos extras do angular ou outras libs ...
  templateUrl: './home.html',
  styleUrl: './home.css'
}) // essa anotation só indica que esse arquivo é um componente
export class Home {
private enviaFormService=inject(Service) // ex get ,post ... ou compartilhar dados entre vários components
// atualização dos estados em meu component
 meuBooleano=false;
 name="hello world"
 idbutton="2"
 arrtest=[{id:"1",name:"test"},{id:"2",name:"test2"}]
 //enviando atributos de um componente para outro
 //estudar @Output tbm
 // input recebe uma informação de fora e output envia pra outro comp

 @Input() minhaPropDeFora!:string;

 @Output() emitindoValorName=new EventEmitter<string>();

  atualizaBoleano(valor:boolean){
    this.meuBooleano=valor;
  }
  showAlert(event:any){
    //this.enviaFormService.Post()
    this.atualizaBoleano(true)
    this.emitindoValorName.emit(this.name)
    alert(event)
  }
  logar(event:string){
    alert(event)
  }

}
