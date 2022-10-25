import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tableStandardActionRows } from 'src/app/core/constants/table.constants';
import { DataTableType } from 'src/app/core/models/tableConfig.model';

@Component({
  templateUrl: './dzemati-clanovi.component.html',
  styleUrls: ['./dzemati-clanovi.component.scss']
})
export class DzematiClanoviComponent implements OnInit {
  public clanoviTableSource: DataTableType;

  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation()?.previousNavigation);
   }

  public ngOnInit(): void {
    this.clanoviTableSource = {
      columns: [
        {
          title: "Ime i prezime",
          dataProperty: "name",
          sortable: false,
        },
        {
          title: "Broj telefona",
          dataProperty: "phoneNumber",
          sortable: false,
        },
        {
          title: "Izmirio obaveze",
          dataProperty: "obligations",
          sortable: false,
        },
        {
          title: "Status",
          dataProperty: "status",
          sortable: false,
        }
      ],
      rowActions: tableStandardActionRows,
      source: [
        {
          name: "Velid Duranovic",
          phoneNumber: "+38762421855",
          obligations: {
            value: "DA",
            extraClass: 'success',
          },
          status: {
            value: "Aktivan",
            extraClass: 'success status'
          }
        },
        {
          name: "Salvedin Duranovic",
          phoneNumber: "+38761403723",
          obligations: {
            value: "NE",
            extraClass: 'error',
          },
          status: {
            value: "Aktivan",
            extraClass: 'success status'
          }
        },
        {
          name: "Nudzejma Mujic Duranovic",
          obligations: {
            value: "DA",
            extraClass: 'success',
          },
          status: {
            value: "Aktivan",
            extraClass: 'success status'
          }
        },
        {
          name: "Niko Nikic",
          phoneNumber: "+38762421855",
          obligations: {
            value: "NE",
            extraClass: 'error',
          },
          status: {
            value: "Neaktivan",
            extraClass: 'error status'
          }
        },
      ]
    }
  }

}
