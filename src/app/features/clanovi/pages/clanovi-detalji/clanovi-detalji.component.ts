import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
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

  constructor(private route: ActivatedRoute, private store: StoreService) { }

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clan$ = this.store.getClan(params['id']).pipe(
        map(x=> {
          return {
            ...x,
            obligations: {
              value: x.obligations ? 'DA' : 'NE',
              extraClass: x.obligations ? 'success' : 'error',
            },
            status: {
              value: x.status ? 'Aktivan' : 'Neaktivan',
              extraClass: x.status ? 'status success' : 'status error',
            }
          }
        })
      );
    })

    this.navigationTabs = [
      { label: 'Opcenito', route: 'opcenito' },
      { label: 'Placanje', route: 'placanje' }
    ]
  }
}
