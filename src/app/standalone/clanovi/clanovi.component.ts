import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTableType } from 'src/app/core/models/tableConfig.model';
import { tableStandardActionRows } from 'src/app/core/constants/table.constants';
import { combineLatest, exhaustMap, filter, forkJoin, map, mergeMap, Observable, switchMap } from 'rxjs';
import { StoreService } from 'src/app/core/services/store.service';
import { ActionRowEnum } from 'src/app/core/enums/table.enums';
import { Clan } from 'src/app/core/models/clan.model';
import { MatDialog } from '@angular/material/dialog';
import { AddNewClanDialogComponent } from './add-new-clan-dialog/add-new-clan-dialog.component';
import { CoreModule } from 'src/app/core/core.module';
import { ActivatedRoute } from '@angular/router';
import { Range } from 'src/app/core/helpers/array.helper';

@Component({
  selector: 'iz-clanovi',
  standalone: true,
  imports: [CommonModule, SharedModule, CoreModule],
  templateUrl: './clanovi.component.html',
  styleUrls: ['./clanovi.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ClanoviComponent implements OnInit {
  @Input() clanoviTableSource: DataTableType;
  clanovi$: Observable<any>;
  public dzematId: string;
  public isDzematiRoute: boolean;

  constructor(private store: StoreService, public dialog: MatDialog, private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.isDzematiRoute = this.route.snapshot.parent?.url[0]?.path === 'dzemati';
    if (this.isDzematiRoute) {
      this.dzematId = this.route.parent?.snapshot.params['id'];
    }

    this.search();

    this.clanoviTableSource = {
      columns: [
        {
          title: "Ime i prezime",
          dataProperty: "name",
          sortable: false,
        },
        {
          title: "Broj telefona",
          dataProperty: "phone_number",
          sortable: false,
        },
        {
          title: "Izmirio obaveze",
          dataProperty: "obligations",
          sortable: false,
        },
        {
          title: "Status",
          dataProperty: "status",
          sortable: false,
        }
      ],
      rowActions: tableStandardActionRows,
      source: this.clanovi$,
      emptyData: 'Nije dodan niti jedan član. Dodaj sada klikom na dugme ispod.'
    }
  }

  public search(searchKey?: string): void {
    this.clanovi$ = this.store.clanovi.pipe(
      switchMap(clanovi => {
        const placanjaObservables$ = clanovi.map(clan => this.store.getPlacanja(clan.id));

        return combineLatest(placanjaObservables$).pipe(
          map(placanja => {
            // Extracting clan_id to the parent level for easier maping in order to avoid O(n^2) complexity
            let placanjaModified = placanja?.map(placanje => {
              return {
                clan_id: placanje[0]?.clan_id,
                placanja: placanje,
              }
            })

            return clanovi.map(clan => {
              let placanjaClan = placanjaModified.find(obj => obj.clan_id === clan.id);

              // Maping years and checking if there is any year for which obligations are not fulfilled
              let years = Range(Number(clan.year_registrered), new Date().getFullYear(), 1);
              let obligationFulfilled = true;

              years.forEach(year => {
                if (!placanjaClan?.placanja.find(placanje => placanje.for_year === year)) {
                  obligationFulfilled = false;
                  return;
                }
              });

              // Return modified clan - Clan View Model
              return {
                ...clan,
                name: `${clan.first_name} ${clan.last_name}`,
                obligations: {
                  value: obligationFulfilled ? 'DA' : 'NE',
                  extraClass: obligationFulfilled ? 'success' : 'error',
                },
                status: {
                  value: clan.status ? 'Aktivan' : 'Neaktivan',
                  extraClass: clan.status ? 'status success' : 'status error',
                }
              }
            })
          }),
          map(clanovi => {
            return clanovi.filter((clan: any) => {
              let isSameDzemat = clan.dzemat_id === this.dzematId;

              if (!searchKey?.trim() && !this.isDzematiRoute)
                return true

              if (clan.name.includes(searchKey) && !this.isDzematiRoute)
                return true

              if (!searchKey?.trim() && this.isDzematiRoute && isSameDzemat)
                return true;

              return clan.name.includes(searchKey) && isSameDzemat
            })
          })
        )
      }),
    );

    this.clanoviTableSource = {
      ...this.clanoviTableSource,
      source: this.clanovi$,
    }
  }

  public callAction({ actionId, entityId }: any): void {
    switch (actionId) {
      case ActionRowEnum.SET_ACTIVE:
        this.store.changeClanStatus(entityId);
        break;
      case ActionRowEnum.DELETE:
        this.store.deleteClan(entityId);
        break;
      default:
        console.log("YOU DON'T HAVE ANY METHOD DEFINED BY THAT NAME!!");
        break;
    }
  }

  public openForm(): void {
    this.dialog.open(AddNewClanDialogComponent);
  }
}
