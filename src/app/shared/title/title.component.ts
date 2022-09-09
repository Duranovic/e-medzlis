import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'iz-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
