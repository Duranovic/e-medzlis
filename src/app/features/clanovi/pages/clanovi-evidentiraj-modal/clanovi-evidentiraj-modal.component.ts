import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-clanovi-evidentiraj-modal',
  templateUrl: './clanovi-evidentiraj-modal.component.html',
  styleUrls: ['./clanovi-evidentiraj-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClanoviEvidentirajModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ClanoviEvidentirajModalComponent>) { }

  ngOnInit(): void {
  }

}
