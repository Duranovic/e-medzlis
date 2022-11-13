import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTableType } from 'src/app/core/models/tableConfig.model';
import { tableStandardActionRows } from 'src/app/core/constants/table.constants';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { StoreService } from 'src/app/core/services/store.service';

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

  constructor(private store: StoreService) { }

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
          dataProperty: "phone_number",
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
      source: this.store.clanovi.pipe(
        map((array: any)=> {
          return array.map((x: any)=> {
            return {
              ...x,
              name: `${x.first_name} ${x.last_name}`,
              obligations: {
                value: x.obligations ? 'DA' : 'NE',
                extraClass: x.obligations ? 'success' : 'error',
              },
              status: {
                value: x.status ? 'Aktivan' : 'Neaktivan',
                extraClass: x.status ? 'status success' : 'status error',
              }
          }
          })
        })
      )
    }
  }
}
