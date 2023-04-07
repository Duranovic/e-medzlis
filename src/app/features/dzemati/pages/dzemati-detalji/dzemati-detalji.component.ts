import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Dzemat } from 'src/app/core/models/dzemat.model';
import { NavigationTabs } from 'src/app/core/models/navigation-tabs.model';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  templateUrl: './dzemati-detalji.component.html',
  styleUrls: ['./dzemati-detalji.component.scss']
})
export class DzematiDetaljiComponent implements OnInit {
  public navigationTabs: NavigationTabs[];
  public dzemat$: Observable<Dzemat>;
  private routeSub$: Subscription;
  

  constructor(private store: StoreService, private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.routeSub$ = this.route.params.subscribe(params => {
      let dzematId = params['id'];
      this.dzemat$ = this.store.getDzemat(dzematId);
    })
    this.navigationTabs = [
      { label: 'Clanovi', route: 'clanovi'},
      { label: 'Uprava', route: 'uprava' },
      { label: 'Statistika', route: 'statistika' },
    ];
  }

  public ngOnDestroy(): void {
    this.routeSub$.unsubscribe();
  }
}
