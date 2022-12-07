import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from '@firebase/util';
import { StoreService } from 'src/app/core/services/store.service';
import { TableService } from 'src/app/core/services/table.service';
import { PlacanjeVM } from '../../models/placanje.model';

@Component({
  selector: 'app-clanovi-evidentiraj-modal',
  templateUrl: './clanovi-evidentiraj-modal.component.html',
  styleUrls: ['./clanovi-evidentiraj-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClanoviEvidentirajModalComponent implements OnInit {

  public evidencija$: Observable<PlacanjeVM>;

  constructor(public dialogRef: MatDialogRef<ClanoviEvidentirajModalComponent>, private store: StoreService, private tableService: TableService) { }
  
  public ngOnInit(): void {
  }

  public evidentiraj(): void {
    let selectedClan = this.tableService.selectedElement;
    if(selectedClan.clan_id)
      this.store.evidentiraj(selectedClan?.clan_id, selectedClan.for_year);
  }
}
