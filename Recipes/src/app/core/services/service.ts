import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  //informa o escopo de acesso do meu service
  providedIn: 'root'
})
// services são usados para compartilhar dados entre diversos componentes
// ex enviar dados pro backend

export class Service {
  constructor(private http: HttpClient) {}

  // Exemplo de método GET
  getData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  // Exemplo de método POST
  postData(data: any): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data);
  }

  // Método para demonstrar uso no componente
  logMessage(message: string): void {
    console.log('Service log:', message);
  }
}
