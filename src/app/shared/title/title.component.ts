import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'iz-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;

  constructor() { }

  public ngOnInit(): void {
  }
}
