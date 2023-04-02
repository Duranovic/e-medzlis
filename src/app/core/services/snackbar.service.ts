import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarMessageComponent } from 'src/app/shared/snackbar-message/snackbar-message.component';
import { SnackbarMessage } from '../models/snackbar-message.model';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar,) { }

  public openSnackbarSuccess(title: string, description: string) {
    this.openSnackBar({
      status: 'success',
      title,
      description
    });
  }

  public openSnackbarError(title: string, description: string) {
    this.openSnackBar({
      status: 'error',
      title,
      description
    });
  }

  public openSnackBar(data: SnackbarMessage): void {
    this._snackBar.openFromComponent(SnackbarMessageComponent, {
      data,
      duration: 5000,
      horizontalPosition: 'end',
      panelClass: ['status-snackbar', data.status],
    });
  }
}
