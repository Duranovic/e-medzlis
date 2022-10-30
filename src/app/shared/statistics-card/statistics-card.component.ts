import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StatisticsCardType } from 'src/app/core/enums/statistics.enums';


@Component({
  selector: 'iz-statistics-card',
  templateUrl: './statistics-card.component.html',
  styleUrls: ['./statistics-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsCardComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() value: number;
  @Input() color: string;
  @Input() type: StatisticsCardType;
  @Input() chartOnePercent: number;
  @Input() chartOneLabel: string;
  @Input() chartTwoPercent: number;
  @Input() chartTwoLabel: string;

  public cardTypes = StatisticsCardType;

  constructor() { }

  public ngOnInit(): void { }
}
