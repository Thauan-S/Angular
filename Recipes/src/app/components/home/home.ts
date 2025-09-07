import { Component, EventEmitter, inject, Input, input, Output, output } from '@angular/core';
import { Service } from '../../core/services/service';
//nessa classe deixo toda a lógica do meu componente
@Component({
  selector: 'app-home',// define o nome do componente para que ele possa ser usado em outros componentes ou templates
  standalone: true,
  imports: [], // módulos extras do angular ou outras libs ...
  templateUrl: './home.html',// arquivo .hmtl
  styleUrl: './home.css'
}) // essa anotation só indica que esse arquivo é um componente
export class Home {
private enviaFormService=inject(Service) // ex get ,post ... ou compartilhar dados entre vários components
// atualização dos estados em meu component
 meuBooleano:boolean=false;
 name:string ="hello world"
 idbutton="2"
 arrtest=[{id:"1",name:"test"},{id:"2",name:"test2"}]


//Get e Set , tenho que criar uma prop privada e dois métodos como abaixo usando set e get
private _valorRecebido="";
 @Input()
  set valorRecebido(value:string){
    // para setar basta usar this.valorRecebido="algo"
  this._valorRecebido=value
 }
 get valorRecebido():string{
  // não preciso chamar nenhum método, basta usar this.valorRecebido
  return this._valorRecebido;
 }
  atualizaBoleano(valor:boolean){
    this.meuBooleano=valor;
  }
  showAlert(event:any){
   this.enviaFormService.logMessage('Botão clicado: ' + event);
    this.atualizaBoleano(true)
  console.log(this.name)
  }
  logar(event:string){
    alert(event)
  }

}
