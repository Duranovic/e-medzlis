import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClanoviEvidentirajModalComponent } from '../clanovi-evidentiraj-modal/clanovi-evidentiraj-modal.component';

@Component({
  templateUrl: './clanovi-evidencija.component.html',
  styleUrls: ['./clanovi-evidencija.component.scss']
})
export class ClanoviEvidencijaComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  public ngOnInit(): void {
  }

  public showEvidentiraj(): void {
    this.dialog.open(ClanoviEvidentirajModalComponent, {
      width: '600px',
    });
  }

}
