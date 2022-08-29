import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DzematiRoutingModule } from './dzemati-routing.module';
import { DzematiPregledComponent } from './pages/dzemati-pregled/dzemati-pregled.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DzematiPregledComponent
  ],
  imports: [
    CommonModule,
    DzematiRoutingModule,
    SharedModule,
  ]
})
export class DzematiModule { }
