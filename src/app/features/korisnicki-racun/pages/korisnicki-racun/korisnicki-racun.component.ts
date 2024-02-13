import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../../../core/services/store.service";
import {Korisnik} from "../../../../core/models/korisnik.model";

@Component({
  templateUrl: './korisnicki-racun.component.html',
  styleUrls: ['./korisnicki-racun.component.scss']
})
export class KorisnickiRacunComponent implements OnInit {
  public korisnik: Korisnik;
  constructor(private store: StoreService) { }

  ngOnInit(): void {
    this.store.trenutniKorisnik$.subscribe((x: any)=>{
      this.korisnik = x[0];
    })
  }

}
