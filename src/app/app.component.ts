import {Component, OnInit} from '@angular/core';
import {filter, Observable, Subject} from 'rxjs';
import { LoginService } from './core/services/login.service';
import {NavigationEnd, Router} from "@angular/router";
import {StoreService} from "./core/services/store.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'e-medzlis';
  currentRoute: string = '';

  constructor(private store: StoreService, private loginService: LoginService, private router: Router){
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

    const userFromLocalStorage = localStorage.getItem('iz-user');
    if(userFromLocalStorage) {
      this.store.getTrenutniKorisnik(userFromLocalStorage);
      this.loginService.setUserLoggedIn();
    }
  }
}
