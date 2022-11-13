import { Component, OnInit } from '@angular/core';
import { tableStandardActionRows } from 'src/app/core/constants/table.constants';
import { DataTableType } from 'src/app/core/models/tableConfig.model';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  templateUrl: './dzemati-pregled.component.html',
  styleUrls: ['./dzemati-pregled.component.scss']
})
export class DzematiPregledComponent implements OnInit {
  public dzematiTableSource: DataTableType;

  constructor(private store: StoreService) { }

  public ngOnInit(): void {
    this.dzematiTableSource = {
      columns: [
        {
          title: "Naziv",
          dataProperty: "naziv",
          sortable: false,
        },
        {
          title: "Broj platitelja",
          dataProperty: "brojPlatitelja",
          sortable: false,
        },
        {
          title: "Broj dzematlija",
          dataProperty: "brojDzematlija",
          sortable: false,
        }
      ],
      rowActions: tableStandardActionRows,
      source: this.store.dzemati,
    }
  }
}
