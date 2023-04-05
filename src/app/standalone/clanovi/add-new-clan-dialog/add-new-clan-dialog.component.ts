import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InputType } from 'src/app/core/enums/input.enums';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-add-new-clan-dialog',
  templateUrl: './add-new-clan-dialog.component.html',
  styleUrls: ['./add-new-clan-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNewClanDialogComponent implements OnInit {
  public step: number = 1;
  public maxSteps: number = 2;

  constructor(public store: StoreService, private dialogRef: MatDialogRef<AddNewClanDialogComponent>) { }
  
  get InputType() {
    return InputType;
  }

  public ngOnInit(): void {
    this.store.initCreateClanForm(); 
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
}
