import { Injectable } from '@angular/core';

@Injectable({
  //informa o escopo de acesso do meu service
  providedIn: 'root'

})
// services são usados para compartilhar dados entre diversos componentes
// ex enviar dados pro backend

export class Service {
  Post(){
    alert("enviou")
  }
}
