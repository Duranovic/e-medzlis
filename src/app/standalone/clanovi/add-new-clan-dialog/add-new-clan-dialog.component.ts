import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { InputType } from 'src/app/core/enums/input.enums';
import { Dzemat } from 'src/app/core/models/dzemat.model';
import { Select } from 'src/app/core/models/select.model';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-add-new-clan-dialog',
  templateUrl: './add-new-clan-dialog.component.html',
  styleUrls: ['./add-new-clan-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNewClanDialogComponent implements OnInit, OnDestroy {
  public step: number = 1;
  public maxSteps: number = 2;
  public dzematiSelect: Select[];
  private _destroy$ = new Subject<void>();

  constructor(public store: StoreService, private dialogRef: MatDialogRef<AddNewClanDialogComponent>) { }
  
  get InputType() {
    return InputType;
  }

  public ngOnInit(): void {
    this.store.initCreateClanForm(); 
    this.prepareDzematiSelect();
  }

  public nextStep(): void {
    this.step++;
  }

  public previousStep(): void {
    this.step = this.step - 1;
  }

  public addNewClan() {
    this.store.addNewClan();
    this.dialogRef.close();
  }

  public prepareDzematiSelect(): void {
    this.store.dzemati.pipe(takeUntil(this._destroy$)).subscribe((dzemati: Dzemat[]) => {
      this.dzematiSelect = dzemati.map((dzemat: Dzemat) => {
        return {
          id: dzemat.id,
          label: dzemat?.name
        }
      })
    });
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
