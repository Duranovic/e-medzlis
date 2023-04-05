import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { InputType } from 'src/app/core/enums/input.enums';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-add-new-clan-dialog',
  templateUrl: './add-new-clan-dialog.component.html',
  styleUrls: ['./add-new-clan-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNewClanDialogComponent implements OnInit {

  constructor(public store: StoreService) { }
  
  get InputType() {
    return InputType;
  }

  public ngOnInit(): void {
    this.store.initCreateClanForm(); 
  }

  public nextStep(): void {
    console.log(this.store.createClanForm);
  }
}
