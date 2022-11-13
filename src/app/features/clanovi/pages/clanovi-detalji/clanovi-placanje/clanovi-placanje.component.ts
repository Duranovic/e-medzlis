import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Timestamp } from 'firebase/firestore';
import { map, of } from 'rxjs';
import { Clan } from 'src/app/core/models/clan.model';
import { Placanje } from 'src/app/core/models/placanje.model';
import { DataTableType } from 'src/app/core/models/tableConfig.model';
import { StoreService } from 'src/app/core/services/store.service';
import { Range } from 'src/app/core/helpers/array.helper';
import { evidentionConstant, obligationFulfilledErrorConstant, obligationFulfilledSuccessConstant } from '../../../constants/placanje.constants';
import { PlacanjeVM } from '../../../models/placanje.model';
import { TableService } from 'src/app/core/services/table.service';
import { convertToLocalDateString } from 'src/app/core/helpers/date.helper';

@Component({
  templateUrl: './clanovi-placanje.component.html',
  styleUrls: ['./clanovi-placanje.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClanoviPlacanjeComponent implements OnInit {
  public placanjeTableSource: DataTableType;

  constructor(private store: StoreService, private tableService: TableService ,private route: ActivatedRoute, private ch: ChangeDetectorRef) { }

  public ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      this.store.getClan(params['id']).subscribe(clan => {
        this.buildTableColumns();
        this.buildTableSource(clan);
        this.ch.detectChanges();
      });
    })
  }

  public buildTableColumns(): void {
    this.placanjeTableSource = {
      columns: [
        {
          title: "Godina",
          dataProperty: "for_year",
          sortable: false,
        },
        {
          title: "Datum izmirenja obaveza",
          dataProperty: "payment_date",
          sortable: false,
        },
        {
          title: "Izmirio obaveze",
          dataProperty: "obligationFulfilled",
          sortable: false,
        },
        {
          title: "Evidencija",
          dataProperty: "evidention",
          sortable: false,
        }
      ],
      source: of([])
    }
  }

  public buildTableSource(clan: Clan): void {
    this.placanjeTableSource = {
      ...this.placanjeTableSource,
      source: this.store.getPlacanja(clan.id).pipe(
        map((placanja: Placanje[]) => {
          return this.mapYears(clan.year_registrered, placanja);
        })
      )
    }
  }

  public mapYears(yearRegistrered: number, placanja: Placanje []): PlacanjeVM [] {
    let placanjaFinal: PlacanjeVM [] = [];
    let years = Range(yearRegistrered, new Date().getFullYear(), 1);

    years.forEach(year => {
      let index = placanja.findIndex(placanje => placanje.for_year == year);

      if (index <= -1) {
        placanjaFinal.push({
          for_year: year,
          payment_date: '-',
          obligationFulfilled: obligationFulfilledErrorConstant,
          evidention: evidentionConstant,
        })
      } else {
        placanjaFinal.push({
          id: placanja[index].id,
          for_year: placanja[index].for_year,
          payment_date: convertToLocalDateString(new Timestamp(placanja[index].payment_date.seconds, placanja[index].payment_date.nanoseconds).toDate()),
          obligationFulfilled: obligationFulfilledSuccessConstant
        })
      }
    })
    placanjaFinal.sort((a: PlacanjeVM, b: PlacanjeVM) => b.for_year - a.for_year);
    return placanjaFinal;
  }
}
