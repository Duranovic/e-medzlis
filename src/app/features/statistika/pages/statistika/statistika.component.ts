import { Component, OnInit } from '@angular/core';
import { StatisticsCardType } from 'src/app/core/enums/statistics.enums';
import {StoreService} from "../../../../core/services/store.service";
import {Observable, take, tap} from "rxjs";
import {Clan} from "../../../../core/models/clan.model";
import {map} from "rxjs/operators";


@Component({
  templateUrl: './statistika.component.html',
  styleUrls: ['./statistika.component.scss']
})
export class StatistikaComponent implements OnInit {
  public clanoviNajmladji$: Observable<Clan[]> = this.store.clanovi.pipe(
    map(clanovi => {
      return clanovi.sort((a: Clan, b: Clan) => {
        return b.year_of_birth - a.year_of_birth;
      }).slice(0, 3)
    },
    )
  );

  public clanoviNajstariji$: Observable<Clan[]> = this.store.clanovi.pipe(
    map(clanovi => {
      return clanovi.sort((a: Clan, b: Clan) => {
        return a.year_of_birth - b.year_of_birth;
      }).slice(0, 3)
    },
    )
  );

  public cardTypes = StatisticsCardType;

public optionsClanovi: any = {
  legend:false,
  showLabels: true,
  animations: true,
  xAxis: true,
  yAxis: true,
  showYAxisLabel: true,
  showXAxisLabel: true,
  xAxisLabel: 'Godina',
  yAxisLabel: 'Članovi',
  timeline: true,
  colorScheme: {
    domain: ['#a7ffd3']
  },
  multi: [
    {
      "name": "Članovi",
      "series": [
        {
          "name": "2015",
          "value": 1
        },
        {
          "name": "2016",
          "value": 2
        },
        {
          "name": "2017",
          "value": 4
        },
        {
          "name": "2018",
          "value": 4
        },
        {
          "name": "2019",
          "value": 4
        },
        {
          "name": "2020",
          "value": 6
        },
        {
          "name": "2021",
          "value": 7
        },
        {
          "name": "2022",
          "value": 8
        },
        {
          "name": "2023",
          "value": 10
        }
      ]
    },
  ],
}

  public optionsClanarine: any = {
    legend:false,
    showLabels: true,
    animations: true,
    xAxis: true,
    yAxis: true,
    showYAxisLabel: true,
    showXAxisLabel: true,
    xAxisLabel: 'Godina',
    yAxisLabel: 'Prihodi od članarina',
    timeline: true,
    colorScheme: {
      domain: ['#a7ffd3']
    },
    multi: [
      {
        "name": "Prihodi",
        "series": [
          {
            "name": "2015",
            "value": 48
          },
          {
            "name": "2016",
            "value": 86
          },
          {
            "name": "2017",
            "value": 172
          },
          {
            "name": "2018",
            "value": 172
          },
          {
            "name": "2019",
            "value": 172
          },
          {
            "name": "2020",
            "value": 214
          },
          {
            "name": "2021",
            "value": 246
          },
          {
            "name": "2022",
            "value": 200
          },
          {
            "name": "2023",
            "value": 86
          }
        ]
      },
    ],
  }

  public optionsClanarineDzemati: any = {
    legend:false,
    showLabels: true,
    animations: true,
    xAxis: true,
    yAxis: true,
    showYAxisLabel: true,
    showXAxisLabel: true,
    xAxisLabel: 'Godina',
    yAxisLabel: 'Prihodi od članarina',
    timeline: true,
    colorScheme: {
      domain: ['#a7ffd3']
    },
    multi: [
      {
        "name": "Prihodi",
        "series": [
          {
            "name": "2015",
            "value": 48
          },
          {
            "name": "2016",
            "value": 86
          },
          {
            "name": "2017",
            "value": 172
          },
          {
            "name": "2018",
            "value": 172
          },
          {
            "name": "2019",
            "value": 172
          },
          {
            "name": "2020",
            "value": 214
          },
          {
            "name": "2021",
            "value": 246
          },
          {
            "name": "2022",
            "value": 200
          },
          {
            "name": "2023",
            "value": 86
          }
        ]
      },
    ],
  }

  view: any;






    clanarineDzematiSingle = [
      {
        "name": "Divičani",
        "value": 1450
      },
      {
        "name": "Grad",
        "value": 3200
      },
      {
        "name": "Lupnica",
        "value": 420
      },
      {
        "name": "Ostali",
        "value": 155
      },
    ];

  ukupnoClanovaDzematSingle = [
    {
      "name": "Divičani",
      "value": 5
    },
    {
      "name": "Grad",
      "value": 6
    },
    {
      "name": "Lupnica",
      "value": 1
    },
    {
      "name": "Ostali",
      "value": 1
    },
  ];

  constructor(private store: StoreService) {
    this.view = [650, 300];
   }

  ngOnInit(): void {
  }

  public getYearsOld (year: number): number {
    return new Date().getFullYear() - year;
  }

}
