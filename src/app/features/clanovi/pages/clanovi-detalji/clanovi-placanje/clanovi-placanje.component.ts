import { Component, OnInit } from '@angular/core';
import { tableStandardActionRows } from 'src/app/core/constants/table.constants';
import { DataTableType } from 'src/app/core/models/tableConfig.model';

@Component({
  templateUrl: './clanovi-placanje.component.html',
  styleUrls: ['./clanovi-placanje.component.scss']
})
export class ClanoviPlacanjeComponent implements OnInit {
  public placanjeTableSource: DataTableType;

  constructor() { }

  public ngOnInit(): void {
    this.placanjeTableSource = {
      columns: [
        {
          title: "Godina",
          dataProperty: "year",
          sortable: false,
        },
        {
          title: "Datum izmirenja obaveza",
          dataProperty: "dateObligationFulfilment",
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
      source: [
        {
          year: "2022",
          obligationFulfilled: {
            value: "NE",
            extraClass: "error",
          },
        },
        {
          year: "2021",
          dateObligationFulfilment: "20-04-1998",
          obligationFulfilled: {
            value: "DA",
            extraClass: "success",
          },
        },
        {
          year: "2022",
          dateObligationFulfilment: "20-04-1998",
          obligationFulfilled: {
            value: "DA",
            extraClass: "success",
          },
        },
        {
          year: "2022",
          dateObligationFulfilment: "20-04-1998",
          obligationFulfilled: {
            value: "DA",
            extraClass: "success",
          },
        },
      ]
    }

    this.calculatedFields();
  }

  public calculatedFields(): void {
    this.placanjeTableSource.source =  this.placanjeTableSource.source.map((value) => {
      if(value.obligationFulfilled.value === "DA") {
        return value;
      } 
      else {
        return  {
          ...value,
          evidention: {
            value: "Evidentiraj",
            extraClass: "button gray",
            typeOfElement: 'button',
          }
        }
      }
    })
  }
}
