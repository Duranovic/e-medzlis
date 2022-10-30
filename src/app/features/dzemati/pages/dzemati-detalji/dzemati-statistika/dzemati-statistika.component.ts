import { Component, OnInit } from '@angular/core';
import { StatisticsCardType } from 'src/app/core/enums/statistics.enums';

@Component({
  templateUrl: './dzemati-statistika.component.html',
  styleUrls: ['./dzemati-statistika.component.scss']
})
export class DzematiStatistikaComponent implements OnInit {
  public cardTypes = StatisticsCardType;
  
  constructor() { }
  public ngOnInit(): void { }
}
