import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";
import {StoreService} from "../../../../core/services/store.service";
import {SvgSize} from "../../../../core/enums/icon.enums";
import {LoginService} from "../../../../core/services/login.service";

@Component({
  selector: 'app-korisnicki-racun-dialog',
  templateUrl: './korisnicki-racun-dialog.component.html',
  styleUrls: ['./korisnicki-racun-dialog.component.scss']
})
export class KorisnickiRacunDialogComponent implements OnInit {

  constructor(public store: StoreService, private loginService: LoginService, private router: Router, private dialogRef: MatDialogRef<KorisnickiRacunDialogComponent>) { }

  ngOnInit(): void {
  }

  public navigateToKorisnickiRacun(): void {
    this.router.navigate(['/korisnicki-racun']).then(value => {
      this.dialogRef.close();
    });
  }

  public logOut(): void {
    localStorage.removeItem('iz-user');
    this.store.trenutniKorisnik$ = undefined;
    this.loginService.setUserLoggedOut();
    this.router.navigate(['/login']);
  }

  public getUsername(korisnik: any): string {
    return korisnik[0]?.first_name + " " + korisnik[0]?.last_name;
  }
  protected readonly SvgSize = SvgSize;
}
