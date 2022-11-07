import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { saveToPDF } from 'src/app/core/helpers/print.helper';
import { ClanoviEvidentirajModalComponent } from '../clanovi-evidentiraj-modal/clanovi-evidentiraj-modal.component';

@Component({
  templateUrl: './clanovi-evidencija.component.html',
  styleUrls: ['./clanovi-evidencija.component.scss'],
})
export class ClanoviEvidencijaComponent implements OnInit {
  @ViewChild('evidencijaPdf') content: ElementRef;

  constructor(public dialog: MatDialog) { }

  public ngOnInit(): void {
  }

  public showEvidentiraj(): void {
    this.dialog.open(ClanoviEvidentirajModalComponent, {
      width: '600px',
    });
  }

  public savePDF(): void {
    saveToPDF(this.content.nativeElement, "Izvjestaj-o-placanja-ABC");
  }
}
