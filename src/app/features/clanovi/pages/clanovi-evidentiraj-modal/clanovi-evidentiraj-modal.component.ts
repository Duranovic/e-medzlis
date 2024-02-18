import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {Observable, take} from 'rxjs';
import { Clan } from 'src/app/core/models/clan.model';
import { StoreService } from 'src/app/core/services/store.service';
import { SnackbarService } from 'src/app/core/services/snackbar.service';
import { TableService } from 'src/app/core/services/table.service';
import { PlacanjeVM } from '../../models/placanje.model';
import {
  evidentionConstant,
  snackbarEvidentionError,
  snackbarEvidentionSuccess
} from '../../constants/placanje.constants';
import {Korisnik} from "../../../../core/models/korisnik.model";
import {map} from "rxjs/operators";
import {Clanarina} from "../../../../core/models/clanarina.model";

@Component({
  selector: 'app-clanovi-evidentiraj-modal',
  templateUrl: './clanovi-evidentiraj-modal.component.html',
  styleUrls: ['./clanovi-evidentiraj-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClanoviEvidentirajModalComponent implements OnInit {
  public clan$: Observable<Clan>;
  public evidention: PlacanjeVM;
  public clanarina$: Observable<Clanarina | undefined>;

  constructor(public store: StoreService, dialogRef: MatDialogRef<ClanoviEvidentirajModalComponent>, private snackbarService: SnackbarService, private tableService: TableService) { }

  public ngOnInit(): void {
    this.clan$ = this.store.selectedClan$;
    this.evidention = this.tableService.selectedElement;
    this.clanarina$ = this.store.clanarine$.pipe(
      map(clanarine =>
        clanarine.find(clanarina => clanarina.godina === this.evidention.for_year)
      ),
      take(1),
    )
  }

  public evidentiraj() {
    if(this.evidention.clan_id) {
      this.store.evidentiraj(this.evidention.clan_id, this.evidention.for_year);
      this.snackbarService.openSnackbarSuccess(snackbarEvidentionSuccess.title, snackbarEvidentionSuccess.description);
    }
    else {
      this.snackbarService.openSnackbarError(snackbarEvidentionError.title, snackbarEvidentionError.description);
      console.error("clan_id is undefined");
    }
  }

  public getOvlastenaOsoba(korisnik: Korisnik): string {
      return `${korisnik.first_name} ${korisnik.last_name}`;
  }

  public getDate(): string {
    return new Date().toLocaleDateString('de-DE');
  }

  protected readonly evidentionConstant = evidentionConstant;
}
