import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { combineLatest, map, Observable, tap } from 'rxjs';
import { tableDeleteActionRow, tableStandardActionRows } from 'src/app/core/constants/table.constants';
import { ActionRowEnum } from 'src/app/core/enums/table.enums';
import { Dzemat } from 'src/app/core/models/dzemat.model';
import { DataTableType } from 'src/app/core/models/tableConfig.model';
import { StoreService } from 'src/app/core/services/store.service';
import { AddNewDzematDialogComponent } from '../add-new-dzemat-dialog/add-new-dzemat-dialog.component';

@Component({
  templateUrl: './dzemati-pregled.component.html',
  styleUrls: ['./dzemati-pregled.component.scss']
})
export class DzematiPregledComponent implements OnInit {
  public dzematiTableSource: DataTableType;
  public dzematiData$: Observable<Dzemat[]>;
  public dzematiCount: number = 0;

  constructor(private store: StoreService, public dialog: MatDialog) { }

  get countMessage(): string {
    return `${this.dzematiCount} ${this.dzematiCount === 1 ? 'dzemat prikazan' : 'dzemata prikazano'}`;
  }

  public ngOnInit(): void {
    this.search();

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
      rowActions: [tableDeleteActionRow],
      emptyData: 'Nije dodan niti jedan dzemat.',
      source: this.dzematiData$
    }
  }

  public search(searchKey?: string): void {
    this.dzematiData$ = combineLatest([this.store.clanovi, this.store.dzemati]).pipe(
      map(([clanovi, dzemati]): Dzemat[] => {
        return dzemati.map(dzemat => {
          return {
            ...dzemat,
            number_of_customers: clanovi.filter(clan => clan.dzemat_id === dzemat.id).length,
            number_of_payers: clanovi.filter(clan => clan.dzemat_id === dzemat.id && clan.payer).length
          }
        }).filter(dzemat => {
          if (!searchKey?.trim())
              return true;
            return dzemat.name.includes(searchKey);
        })
      }),
      tap((x: Dzemat[])=> {
        this.dzematiCount = x.length;
      })
    );

    this.dzematiTableSource = {
      ...this.dzematiTableSource,
      source: this.dzematiData$
    }
  }

  public openForm(): void {
    this.dialog.open(AddNewDzematDialogComponent);
  }

  public callAction({actionId, entityId }: any): void {
    switch (actionId) {
      case  ActionRowEnum.DELETE:
        this.store.deleteDzemat(entityId);
        break;
      default:
        console.log("YOU DON'T HAVE ANY METHOD DEFINED BY THAT NAME!!");
        break;
    }
  }
}
