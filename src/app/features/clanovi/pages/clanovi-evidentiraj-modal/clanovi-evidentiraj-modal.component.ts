import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Clan } from 'src/app/core/models/clan.model';
import { StoreService } from 'src/app/core/services/store.service';
import { SnackbarService } from 'src/app/core/services/snackbar.service';
import { TableService } from 'src/app/core/services/table.service';
import { PlacanjeVM } from '../../models/placanje.model';
import { snackbarEvidentionError, snackbarEvidentionSuccess } from '../../constants/placanje.constants';

@Component({
  selector: 'app-clanovi-evidentiraj-modal',
  templateUrl: './clanovi-evidentiraj-modal.component.html',
  styleUrls: ['./clanovi-evidentiraj-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClanoviEvidentirajModalComponent implements OnInit {
  public clan$: Observable<Clan>;
  public evidention: PlacanjeVM;


  constructor(public dialogRef: MatDialogRef<ClanoviEvidentirajModalComponent>, private snackbarService: SnackbarService ,private storeService: StoreService, private tableService: TableService) { }

  public ngOnInit(): void {
    this.clan$ = this.storeService.selectedClan$;
    this.evidention = this.tableService.selectedElement;
  }

  public evidentiraj() {
    if(this.evidention.clan_id) {
      this.storeService.evidentiraj(this.evidention.clan_id, this.evidention.for_year);
      this.snackbarService.openSnackbarSuccess(snackbarEvidentionSuccess.title, snackbarEvidentionSuccess.description);
    }
    else {
      this.snackbarService.openSnackbarError(snackbarEvidentionError.title, snackbarEvidentionError.description);
      console.error("clan_id is undefined");
    }
  }
}
