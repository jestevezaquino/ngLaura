import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface UserToken {
  Token:string,
  Expiration:Date
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  signIn(email:string, password:string)
  {
    const user = { email: email, password: password };
    return this.http.post("https://localhost:44371/api/account/login", user);
  }

  signUp(email:string, password:string)
  {
    const user = { email: email, password: password };
    return this.http.post("https://localhost:44371/api/account/create", user);
  }
}
