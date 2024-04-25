import { Injectable } from "@angular/core";
 
@Injectable({
  providedIn: "root",       // глобальный сервис
})


export class AuthService {
  isLoggedIn = true;
  login(): void { this.isLoggedIn = true; }
  logout(): void { this.isLoggedIn = false;}
}