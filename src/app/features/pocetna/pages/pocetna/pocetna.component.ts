import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../../../core/services/store.service";
import {
  AddNewDzematDialogComponent
} from "../../../dzemati/pages/add-new-dzemat-dialog/add-new-dzemat-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {
  AddNewClanDialogComponent
} from "../../../../standalone/clanovi/add-new-clan-dialog/add-new-clan-dialog.component";
import {Postavka} from "../../../../core/models/postavka.model";

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.scss']
})
export class PocetnaComponent {
  public postavke: Postavka[];
  constructor(public store: StoreService, private dialog: MatDialog) { }

  public ngOnInit() :void {
    this.store.postavke$.subscribe(postavke => {
      this.postavke = postavke;
    });
  }

  public openDialogDodajCLan(): void {
    this.isDodavanjeClanovaEnabled() && this.dialog.open(AddNewClanDialogComponent);
  }

  public openDialogDodajDzemat(): void {
    this.isDodavanjeDzemataEnabled() && this.dialog.open(AddNewDzematDialogComponent);
  }

  public isDodavanjeDzemataEnabled(): boolean {
    return this.postavke?.find(x=>x.type === 'dodavanje_dzemata')!.value;
  }

  public isDodavanjeClanovaEnabled(): boolean {
    return this.postavke?.find(x=>x.type === 'dodavanje_clanova')!.value;
  }
}
