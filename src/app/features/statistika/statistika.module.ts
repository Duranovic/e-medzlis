import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatistikaRoutingModule } from './statistika-routing.module';
import { StatistikaComponent } from './pages/statistika/statistika.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    StatistikaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StatistikaRoutingModule,
    NgxChartsModule,
  ]
})
export class StatistikaModule { }
