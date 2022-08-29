import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoginService } from './core/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-medzlis';
  isUserLoggedIn: Subject<boolean>;
  constructor(private loginService: LoginService){
    this.isUserLoggedIn = this.loginService.isUserLoggedIn; 
    this.isUserLoggedIn.subscribe(x=>{
      console.log(x);
    })
  }
}
