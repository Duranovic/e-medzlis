import { Component, OnInit } from '@angular/core';
import { StatisticsCardType } from 'src/app/core/enums/statistics.enums';


@Component({
  templateUrl: './statistika.component.html',
  styleUrls: ['./statistika.component.scss']
})
export class StatistikaComponent implements OnInit {
  public cardTypes = StatisticsCardType;
  view: any;

    // options
    legend: boolean = false;
    showLabels: boolean = true;
    animations: boolean = true;
    xAxis: boolean = true;
    yAxis: boolean = true;
    showYAxisLabel: boolean = true;
    showXAxisLabel: boolean = true;
    xAxisLabel: string = 'Year';
    yAxisLabel: string = 'Population';
    timeline: boolean = true;
    colorScheme: any = {
      domain: ['#a7ffd3']
    };

     multi = [
      {
        "name": "Germany",
        "series": [
          {
            "name": "2015",
            "value": 10000
          },
          {
            "name": "2016",
            "value": 13000
          },
          {
            "name": "2017",
            "value": 15000
          },
          {
            "name": "2018",
            "value": 8000
          },
          {
            "name": "2019",
            "value": 12000
          },
          {
            "name": "2020",
            "value": 13000
          },
          {
            "name": "2021",
            "value": 9000
          },
          {
            "name": "2022",
            "value": 2000
          }
        ]
      },
    ];
    

    single = [
      {
        "name": "Germany",
        "value": 8940000
      },
      {
        "name": "USA",
        "value": 5000000
      },
      {
        "name": "France",
        "value": 7200000
      },
      {
        "name": "Accc",
        "value": 8940000
      },
      {
        "name": "Test",
        "value": 5000000
      },
      {
        "name": "Rest",
        "value": 7200000
      },
      
    ];

  constructor() {
    this.view = [650, 300];
   }

  ngOnInit(): void {
  }

}
