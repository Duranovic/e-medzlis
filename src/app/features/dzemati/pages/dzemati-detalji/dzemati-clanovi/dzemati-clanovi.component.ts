import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { tableStandardActionRows } from 'src/app/core/constants/table.constants';
import { DataTableType } from 'src/app/core/models/tableConfig.model';

@Component({
  templateUrl: './dzemati-clanovi.component.html',
  styleUrls: ['./dzemati-clanovi.component.scss']
})
export class DzematiClanoviComponent {
  public clanoviTableSource: DataTableType;

  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation()?.previousNavigation);
   }
}
