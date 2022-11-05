import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTableType } from 'src/app/core/models/tableConfig.model';
import { tableStandardActionRows } from 'src/app/core/constants/table.constants';

@Component({
  selector: 'iz-clanovi',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './clanovi.component.html',
  styleUrls: ['./clanovi.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClanoviComponent implements OnInit {
  @Input() clanoviTableSource: DataTableType;

  constructor() { }

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
