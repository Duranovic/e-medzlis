import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import {StoreService} from "./store.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _isUserLoggedIn: Subject<boolean> = new Subject();

  constructor(private store: StoreService)
  { }

  public setUserLoggedIn(){
    this._isUserLoggedIn.next(true);
  }

  public setUserLoggedOut() {
    this._isUserLoggedIn.next(false);
  }

  public isUserLoggedIn() {
    return this._isUserLoggedIn;
  }
}
