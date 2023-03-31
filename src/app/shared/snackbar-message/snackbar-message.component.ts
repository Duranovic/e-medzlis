import { ChangeDetectionStrategy, Component, OnInit, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { SnackbarMessage } from 'src/app/core/models/snackbar-message.model';

@Component({
  selector: 'iz-snackbar-message',
  templateUrl: './snackbar-message.component.html',
  styleUrls: ['./snackbar-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnackbarMessageComponent {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackbarMessage, private _snackBarRef: MatSnackBarRef<SnackbarMessageComponent>) { }

  /**
   * Handles manually closing snackbar.
   */
  public close(): void{
    this._snackBarRef.dismiss();
  }
}
