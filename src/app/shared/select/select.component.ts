import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Select } from 'src/app/core/models/select.model';

@Component({
  selector: 'iz-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements OnInit {
  public isOpened = false;
  public selected?: Select;

  @Input() frmControl: FormControl;
  @Input() secondary: boolean;
  @Input() label: string;
  @Input() source: Select[];
  
  constructor() { }

  public ngOnInit(): void {
    this.selected = this.frmControl.value;
  }

  public open() : void{
    this.isOpened = !this.isOpened;
  }

  public selectOption(option: Select): void {
    this.selected = option;
    this.isOpened = false;
    this.frmControl.setValue(option);
  }
}
