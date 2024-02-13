import {Component, OnInit} from '@angular/core';
import {filter, Observable, Subject} from 'rxjs';
import { LoginService } from './core/services/login.service';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'e-medzlis';
  isUserLoggedIn: Subject<boolean>;
  currentRoute: string = '';

  constructor(private loginService: LoginService, private router: Router){
    this.isUserLoggedIn = this.loginService.isUserLoggedIn;
    this.isUserLoggedIn.subscribe(x=>{
      console.log("USER LOGGED IN: ", x);
    })
  }

  get isCurrentRouteLogin() {
    return this.currentRoute.includes('login');
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.url;
      });
  }
}
