import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";
import {StoreService} from "../../../../core/services/store.service";
import {SvgSize} from "../../../../core/enums/icon.enums";

@Component({
  selector: 'app-korisnicki-racun-dialog',
  templateUrl: './korisnicki-racun-dialog.component.html',
  styleUrls: ['./korisnicki-racun-dialog.component.scss']
})
export class KorisnickiRacunDialogComponent implements OnInit {

  constructor(private store: StoreService, private router: Router, private dialogRef: MatDialogRef<KorisnickiRacunDialogComponent>) { }

  ngOnInit(): void {
  }

  public navigateToKorisnickiRacun(): void {
    this.router.navigate(['/korisnicki-racun']).then(value => {
      this.dialogRef.close();
    });
  }

  public logOut(): void {
    this.router.navigate(['/login']);
  }

  protected readonly SvgSize = SvgSize;
}
