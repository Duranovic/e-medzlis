import { Component, OnInit } from '@angular/core';
import { NavigationTabs } from 'src/app/core/models/navigation-tabs.model';

@Component({
  templateUrl: './clanovi-detalji.component.html',
  styleUrls: ['./clanovi-detalji.component.scss']
})
export class ClanoviDetaljiComponent implements OnInit {
  public navigationTabs: NavigationTabs[];

  constructor() { }

  ngOnInit(): void {
    this.navigationTabs = [
      {label: 'Opcenito', route: 'opcenito'},
      { label: 'Statistika', route: 'statistika' },
      { label: 'Placanje', route: 'placanje' }
    ]
  }

}
