import { inject, Injectable } from '@angular/core';
import { LoginCredentials, LoginResponse } from '../../models';
import { LoginService } from '../interfaces/login-service';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceImp implements LoginService {
  private http = inject(HttpClient)
  login(loginCredentials: LoginCredentials): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.apiUrl}${environment.endpoints.login}`, loginCredentials)
      .pipe(catchError((error) => {
        return throwError(() => error);
      }
      ))
  }

}
