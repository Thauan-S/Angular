import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { LoginCredentials } from '../../models';
import { LoginServiceImp } from '../../core/services/login-service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Home } from "../home/home";

@Component({
  selector: 'login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})


export class Login {
  // NÃO É LEGAL FAZER CHAMADAS HTTP NOS COMPONENTES FILHOS, POIS ELE PODE SER REUTILIZADO EM DIFERENTES LOCAIS
  //DEVO INSERIR SEMPRE NO COMPONENTE PAI E REPASSAR OS RESULTADOS PRO COMPONENTE FILHO
 private readonly loginService=inject(LoginServiceImp)
 
 recebendoValorName:string="";
  loginForm: LoginCredentials = {
    email: '',
    password: ''
  }
  ngOnInit(){
    alert("iniciou a página ")
  }
  onSubmit() {
   let data= this.loginService.login(this.loginForm);
   console.log(data.forEach(i=>i.token))
  }
}
