import { Observable } from "rxjs";
import { LoginCredentials, LoginResponse } from "../../models";

export interface LoginService{
  login(credentials: LoginCredentials): Observable<LoginResponse>;
}
