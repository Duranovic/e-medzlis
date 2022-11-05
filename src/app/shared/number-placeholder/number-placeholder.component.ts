import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'iz-number-placeholder',
  templateUrl: './number-placeholder.component.html',
  styleUrls: ['./number-placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NumberPlaceholderComponent implements OnInit {
  @Input() label: string;
  @Input() value: string;

  constructor(private _snackBar: MatSnackBar) { }

  public ngOnInit(): void {
  }

  public copyJmbg(): void {
    navigator.clipboard.writeText(this.value);
    this._snackBar.open('JMBG kopiran u medjuspremnik', 'Uredu', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }
}
