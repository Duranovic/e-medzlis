import { Component } from '@angular/core';
import { DataTableType } from 'src/app/core/models/tableConfig.model';

@Component({
  templateUrl: './dzemati-clanovi.component.html',
  styleUrls: ['./dzemati-clanovi.component.scss']
})
export class DzematiClanoviComponent {
  public clanoviTableSource: DataTableType;

  constructor() { }
}
