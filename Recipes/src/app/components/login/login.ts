import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { LoginCredentials } from '../../models';
import { LoginServiceImp } from '../../core/services/login-service';


@Component({
  selector: 'login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})


export class Login {
 private loginService=inject(LoginServiceImp)
  loginForm: LoginCredentials = {
    email: '',
    password: ''
  }

  onSubmit() {
   let data= this.loginService.login(this.loginForm);
   console.log(data.forEach(i=>i.token))
  }
}
