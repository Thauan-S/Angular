import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  imports: [],
  templateUrl: './componente-filho.html',
  styleUrl: './componente-filho.css'
})
export class ComponenteFilho {
 //enviando atributos de um componente para outro
 // input recebe uma informação de fora 
 //É uma boa prática utilizar o mesmo nome tanto no componente pai quanto no componente filho
 @Input() recebeProp:string="";
//  output envia pra outro componente pai
 @Output() sendPropEmitter=new EventEmitter<string>();
 
 sendMessageToParent(){
   this.sendPropEmitter.emit("hello ,parent")
 }

//GET E SET ,
//  PARA QUE SERVE  ?
// Encapsular lógica ao acessar propriedades (como validar, transformar ou disparar eventos).
// Proteger atributos privados.
// Ter mais controle sobre o que acontece quando uma variável é lida ou alterada.
private _receivedProppGETSET:string=""
 // basta criar os métodos e usar apenas receivedPropp  e receivedPropp="algo"
 @Input() 
 get receivedProppGETSET(){
  return this._receivedProppGETSET
 }
 set receivedProppGETSET(value:string){
    //  if (value.length >= 3) {
    //   this._receivedProppGETSET = value;
    // } else {
    //   console.warn('Nome deve ter pelo menos 3 caracteres.');
    // }
  //aqui eu faço algum tratamento por exemplo to upper
  this._receivedProppGETSET=value.toUpperCase()
 }

}
