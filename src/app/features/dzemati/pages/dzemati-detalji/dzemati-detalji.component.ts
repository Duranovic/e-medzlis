import { Component, OnInit } from '@angular/core';
import { NavigationTabs } from 'src/app/core/models/navigation-tabs.model';

@Component({
  templateUrl: './dzemati-detalji.component.html',
  styleUrls: ['./dzemati-detalji.component.scss']
})
export class DzematiDetaljiComponent implements OnInit {
  public navigationTabs: NavigationTabs[];

  constructor() { }

  public ngOnInit(): void {
    this.navigationTabs = [
      { label: 'Clanovi', route: 'clanovi'},
      { label: 'Uprava', route: 'uprava' },
      { label: 'Statistika', route: 'statistika' },
    ];
  }
}
