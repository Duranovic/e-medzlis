import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'iz-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
