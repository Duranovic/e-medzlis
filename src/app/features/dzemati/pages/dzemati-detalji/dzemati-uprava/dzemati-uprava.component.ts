import { Component, OnInit } from '@angular/core';
import { tableStandardActionRows } from 'src/app/core/constants/table.constants';
import { DataTableType } from 'src/app/core/models/tableConfig.model';

@Component({
  templateUrl: './dzemati-uprava.component.html',
  styleUrls: ['./dzemati-uprava.component.scss']
})
export class DzematiUpravaComponent implements OnInit {
  public upravaTableSource: DataTableType;
  
  constructor() { }

  public ngOnInit(): void {
    this.upravaTableSource = {
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
          title: "Pozicija",
          dataProperty: "position",
          sortable: false,
        }
      ],
      rowActions: tableStandardActionRows,
      source: [
        {
          fieldData: {
            name: "Velid Duranovic",
            phoneNumber: "+38762421855",
            position: "Efendija",
          },
        },
        {
          fieldData: {
            name: "Salvedin Duranovic",
            phoneNumber: "+38761403723",
            position: "Blagajnik"
          },
        },
        {
          fieldData: {
            name: "Nudzejma Mujic Duranovic",
            position: "Clan upravnog odbora",
          },
        },
        {
          fieldData: {
            name: "Niko Nikic",
            phoneNumber: "+38762421855",
            position: "Clan upravnog odbora",
          },
        },
      ]
    }
  }

}
