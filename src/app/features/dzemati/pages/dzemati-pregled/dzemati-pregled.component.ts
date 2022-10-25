import { Component, OnInit } from '@angular/core';
import { tableStandardActionRows } from 'src/app/core/constants/table.constants';
import { DataTableType } from 'src/app/core/models/tableConfig.model';

@Component({
  templateUrl: './dzemati-pregled.component.html',
  styleUrls: ['./dzemati-pregled.component.scss']
})
export class DzematiPregledComponent implements OnInit {

  public dzematiTableSource: DataTableType;

  constructor() { }

  ngOnInit(): void {
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
      source: [
        {
          fieldData: {
            naziv: "Divicani",
            brojPlatitelja: 100,
            brojDzematlija: 400,
          },
        },
        {
          fieldData: {
            naziv: "Lupnica",
            brojPlatitelja: 50,
            brojDzematlija: 300,
          },
        },
        {
          fieldData: {
            naziv: "Doribaba",
            brojPlatitelja: 40,
            brojDzematlija: 200,
          },
        },
        {
          fieldData: {
            naziv: "Bistrica",
            brojPlatitelja: 100,
            brojDzematlija: 300,
          },
        },
      ]
    }
  }

}
