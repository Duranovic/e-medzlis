import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Clan } from 'src/app/core/models/clan.model';
import { StoreService } from 'src/app/core/services/store.service';
import { TableService } from 'src/app/core/services/table.service';
import { Evidention, PlacanjeVM } from '../../models/placanje.model';

@Component({
  selector: 'app-clanovi-evidentiraj-modal',
  templateUrl: './clanovi-evidentiraj-modal.component.html',
  styleUrls: ['./clanovi-evidentiraj-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClanoviEvidentirajModalComponent implements OnInit {
  public clan$: Observable<Clan>;
  public evidention: PlacanjeVM;


  constructor(public dialogRef: MatDialogRef<ClanoviEvidentirajModalComponent>, private storeService: StoreService, private tableService: TableService) { }

  public ngOnInit(): void {
    this.clan$ = this.storeService.selectedClan$;
    this.evidention = this.tableService.selectedElement;
  }

  public evidentiraj() {
    if(this.evidention.clan_id)
      this.storeService.evidentiraj(this.evidention.clan_id, this.evidention.for_year);
    else
      console.error("clan_id is undefined");
  }
}
