import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { InputType } from 'src/app/core/enums/input.enums';
import { Clan } from 'src/app/core/models/clan.model';
import { Select } from 'src/app/core/models/select.model';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  templateUrl: './add-new-dzemat-dialog.component.html',
  styleUrls: ['./add-new-dzemat-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNewDzematDialogComponent implements OnInit, OnDestroy {
  // public clanoviSelect: Select[];
  private _destroy$ = new Subject<void>();

  constructor(public store: StoreService, private dialogRef: MatDialogRef<AddNewDzematDialogComponent>) { }

  get InputType() {
    return InputType;
  }

  public ngOnInit(): void {
    this.store.initCreateDzematForm();
    // this.prepareClanoviSelect();
  }

  public addNewDzemat() {
    this.store.addNewDzemat();
    this.dialogRef.close();
  }

  // public prepareClanoviSelect(): void {
  //   this.store.clanovi.pipe(takeUntil(this._destroy$)).subscribe((clanovi: Clan[]) => {
  //     this.clanoviSelect = clanovi.map((clan: Clan) => {
  //       return {
  //         id: clan.id,
  //         label: `${clan.first_name} ${clan.last_name}`
  //       }
  //     })
  //   });
  // }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
