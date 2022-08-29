import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'iz-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputSearchComponent implements OnInit {
  @Input() placeholder: string;

  constructor() { }

  ngOnInit(): void {
  }

}
