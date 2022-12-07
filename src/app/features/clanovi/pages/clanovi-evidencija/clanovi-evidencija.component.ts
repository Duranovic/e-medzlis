import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, tap, withLatestFrom } from 'rxjs';
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

  public vm$: Observable<any>;
  public evidention: PlacanjeVM;
  public descriptionText: string;
  public breadcrumbValues: any;

  constructor(public dialog: MatDialog, private store: StoreService, private tableService: TableService, private ch: ChangeDetectorRef) { }

  public ngOnInit(): void {

    this.store.selectedClan$.pipe(
      tap(x=>{
        console.log("CUSOTM MAP: ", x);
      })
    )
    this.vm$ = this.store.selectedClan$.pipe(
      withLatestFrom(this.store.placanja$),
      map(([selectedClan, evidention]:any) => {
        this.evidention = evidention.find((x: any)=>x.for_year == this.tableService.selectedElement.for_year);
        this.tableService.patchSelectedElement({clan_id: selectedClan.id})
        this.descriptionText = this.composeDescriptionText(selectedClan, evidention);
        this.breadcrumbValues = {
          label: selectedClan.first_name + ' ' + selectedClan.last_name,
          route: `/clanovi/${selectedClan.id}/placanje`,
        }
        return {selectedClan, evidention};
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

  public composeDescriptionText(clan: Clan, evidention: PlacanjeVM): string {
    return `
      ${clan.first_name} ${clan.last_name} nastanjen na adresi u ${clan.address }, I koji je član u džematu Divičani, ${evidention.obligationFulfilled.value=='DA' ? 'izmirio je': 'nije izmirio'} obaveze za
     ${evidention.for_year}. godinu do dana ${getCurrentDateToString()} godine
    `
  }
}
