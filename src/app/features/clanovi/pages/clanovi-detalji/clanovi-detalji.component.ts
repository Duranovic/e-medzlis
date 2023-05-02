import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, combineLatest } from 'rxjs';
import { Range } from 'src/app/core/helpers/array.helper';
import { Clan } from 'src/app/core/models/clan.model';
import { NavigationTabs } from 'src/app/core/models/navigation-tabs.model';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  templateUrl: './clanovi-detalji.component.html',
  styleUrls: ['./clanovi-detalji.component.scss']
})
export class ClanoviDetaljiComponent implements OnInit {
  public navigationTabs: NavigationTabs[];
  public clan$: Observable<any>;
  public obligationsFulifilled: boolean = true;

  constructor(private route: ActivatedRoute, private store: StoreService) { }

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      let clanId: string = params['id'];
      this.clan$ = combineLatest([this.store.getClan(clanId), this.store.getPlacanja(clanId)]).pipe(
        map(([clan, placanja]): Clan => {
          let years = Range(Number(clan.year_registrered), new Date().getFullYear(), 1);
          years.forEach(year => {
            if (!placanja.find(placanje => placanje.for_year === year)) {
              this.obligationsFulifilled = false;
              return;
            }
          })
          return {
            ...clan,
            obligations: {
              value: this.obligationsFulifilled ? 'DA' : 'NE',
              extraClass: this.obligationsFulifilled ? 'success' : 'error',
            },
            status: {
              value: clan.status ? 'Aktivan' : 'Neaktivan',
              extraClass: clan.status ? 'status success' : 'status error',
            }

          }
        })
      )
    })

    this.navigationTabs = [
      { label: 'Opcenito', route: 'opcenito' },
      { label: 'Placanje', route: 'placanje' }
    ]
  }
}
