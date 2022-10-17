import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'iz-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements OnInit {
  public isOpened = false;
  public selected: any;

  constructor() { }

  ngOnInit(): void {
  }

  public open() : void{
    this.isOpened = !this.isOpened;
  }

  public selectOption(option: any): void {
    this.selected = option;
    this.isOpened = false;
  }

}
