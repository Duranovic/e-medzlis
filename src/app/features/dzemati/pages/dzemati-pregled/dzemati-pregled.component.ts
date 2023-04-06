import { Component, OnInit } from '@angular/core';
import { combineLatest, map, mergeMap, Observable, Subject, switchMap, tap, withLatestFrom } from 'rxjs';
import { tableStandardActionRows } from 'src/app/core/constants/table.constants';
import { Dzemat } from 'src/app/core/models/dzemat.model';
import { DataTableType } from 'src/app/core/models/tableConfig.model';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  templateUrl: './dzemati-pregled.component.html',
  styleUrls: ['./dzemati-pregled.component.scss']
})
export class DzematiPregledComponent implements OnInit {
  public dzematiTableSource: DataTableType;
  public dzematiData$: Observable<Dzemat[]>;
  public dzematiCount: number = 0;

  constructor(private store: StoreService) { }

  get countMessage(): string {
    return `${this.dzematiCount} ${this.dzematiCount === 1 ? 'dzemat prikazan' : 'dzemata prikazano'}`;
  }

  public ngOnInit(): void {
    this.dzematiData$ = combineLatest([this.store.clanovi, this.store.dzemati]).pipe(
      map(([clanovi, dzemati]): Dzemat[] => {
        return dzemati.map(dzemat => {
          return {
            ...dzemat,
            number_of_customers: clanovi.filter(clan => clan.dzemat_id === dzemat.id).length,
            number_of_payers: clanovi.filter(clan => clan.dzemat_id === dzemat.id && clan.payer).length
          }
        })
      }),
      tap(dzemati => {
        this.dzematiCount = dzemati.length;
      })
    );

    this.dzematiTableSource = {
      columns: [
        {
          title: "Naziv",
          dataProperty: "name",
          sortable: false,
        },
        {
          title: "Broj platitelja",
          dataProperty: "number_of_payers",
          sortable: false,
        },
        {
          title: "Broj dzematlija",
          dataProperty: "number_of_customers",
          sortable: false,
        }
      ],
      rowActions: tableStandardActionRows,
      source: this.dzematiData$
    }
  }
}
