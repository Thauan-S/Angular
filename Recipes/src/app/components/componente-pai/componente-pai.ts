import { Component } from '@angular/core';
import { ComponenteFilho } from "../componente-filho/componente-filho";

@Component({
  selector: 'app-componente-pai',
  imports: [ComponenteFilho],
  templateUrl: './componente-pai.html',
  styleUrl: './componente-pai.css'
})
export class ComponentePai {
 message:string=""
  messageReceived:string=""
receiveMessage(event:string) {
this.messageReceived=event
}

 sendMessageTochildren():string{
  return this.message="hello , children";
 }
 sendMessageTochildrenGETSET() {
  return this.message="hello , children";
}
}
