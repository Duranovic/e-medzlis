import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, tap } from 'rxjs';
import { getCurrentDateToString } from 'src/app/core/helpers/date.helper';
import { saveToPDF } from 'src/app/core/helpers/print.helper';
import { Clan } from 'src/app/core/models/clan.model';
import { StoreService } from 'src/app/core/services/store.service';
import { TableService } from 'src/app/core/services/table.service';
import { PlacanjeVM } from '../../models/placanje.model';
import { ClanoviEvidentirajModalComponent } from '../clanovi-evidentiraj-modal/clanovi-evidentiraj-modal.component';

@Component({
  templateUrl: './clanovi-evidencija.component.html',
  styleUrls: ['./clanovi-evidencija.component.scss'],
})
export class ClanoviEvidencijaComponent implements OnInit {
  @ViewChild('evidencijaPdf') content: ElementRef;

  public clan$: Observable<Clan>;
  public evidention: PlacanjeVM;
  public descriptionText: string;
  public breadcrumbValues: any;

  constructor(public dialog: MatDialog, private store: StoreService, private tableService: TableService) { }

  public ngOnInit(): void {
    this.clan$ = this.store.selectedClan$.pipe(
      tap((selectedClan: Clan)=> {
        this.tableService.patchSelectedElement({clan_id: selectedClan.id})
        this.evidention = this.tableService.selectedElement;
        this.descriptionText = this.composeDescriptionText(selectedClan);
        this.breadcrumbValues = {
          label: selectedClan.first_name + ' ' + selectedClan.last_name,
          route: `/clanovi/${selectedClan.id}/placanje`,
        }
      })
    );
  }

  public showEvidentiraj(): void {
    this.dialog.open(ClanoviEvidentirajModalComponent, {
      width: '600px',
    });
  }

  public savePDF(): void {
    saveToPDF(this.content.nativeElement, "Izvjestaj-o-placanja-ABC");
  }

  public composeDescriptionText(clan: Clan): string {
    return `
      ${clan.first_name} ${clan.last_name} nastanjen na adresi u ${clan.address }, I koji je član u džematu Divičani, ${this.evidention.obligationFulfilled.value=='DA' ? 'izmirio je': 'nije izmirio'} obaveze za
     ${this.evidention.for_year}. godinu do dana ${getCurrentDateToString()} godine
    `
  }
}
