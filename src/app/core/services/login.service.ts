import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isUserLoggedIn: any;

  constructor() {
    this.isUserLoggedIn = new Subject();
  }

  public logIn(){
    this.isUserLoggedIn.next(true);
  }

  public logOut() {
    this.isUserLoggedIn.next(false);
  }
}
