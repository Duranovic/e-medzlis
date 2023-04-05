import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'iz-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements OnInit {
  @Input() frmControl: FormControl;
  @Input() type: string;
  @Input() label: string;
  @Input() placeholder: string = '';

  public focusInput: boolean;
  constructor() { }

  public ngOnInit(): void {
    this.frmControl.valueChanges.subscribe(formControlValue=>{
      formControlValue ? this.focusInput = true : this.focusInput = false;
    })
  }

}
