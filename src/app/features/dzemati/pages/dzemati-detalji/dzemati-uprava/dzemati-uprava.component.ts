import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { tableStandardActionRows } from 'src/app/core/constants/table.constants';
import { DataTableType } from 'src/app/core/models/tableConfig.model';

@Component({
  templateUrl: './dzemati-uprava.component.html',
  styleUrls: ['./dzemati-uprava.component.scss']
})
export class DzematiUpravaComponent implements OnInit {
  public upravaTableSource: DataTableType;
  
  constructor(private store: AngularFirestore) { }

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
          dataProperty: "phone_number",
          sortable: false,
        },
        {
          title: "Pozicija",
          dataProperty: "position",
          sortable: false,
        }
      ],
      rowActions: tableStandardActionRows,
      source: this.store.collection('clanovi').valueChanges().pipe(
        map((array: any)=> {
          return array.map((x: any)=> {
            return {
              ...x,
              name: `${x.first_name} ${x.last_name}`,
              position: x?.role === 1 ? "Clan upravnog odbora" : "Blagajnik",
            }
          });
        })
      )
    }
  }

}
