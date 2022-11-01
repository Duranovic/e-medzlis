import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DzematiRoutingModule } from './dzemati-routing.module';
import { DzematiPregledComponent } from './pages/dzemati-pregled/dzemati-pregled.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DzematiClanoviComponent } from './pages/dzemati-detalji/dzemati-clanovi/dzemati-clanovi.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DzematiDetaljiComponent } from './pages/dzemati-detalji/dzemati-detalji.component';
import { DzematiUpravaComponent } from './pages/dzemati-detalji/dzemati-uprava/dzemati-uprava.component';
import { DzematiStatistikaComponent } from './pages/dzemati-detalji/dzemati-statistika/dzemati-statistika.component';
import { ClanoviComponent } from 'src/app/standalone/clanovi/clanovi.component';

@NgModule({
  declarations: [
    DzematiPregledComponent,
    DzematiClanoviComponent,
    DzematiDetaljiComponent,
    DzematiUpravaComponent,
    DzematiStatistikaComponent
  ],
  imports: [
    CommonModule,
    DzematiRoutingModule,
    SharedModule,
    ClanoviComponent,
    MatTabsModule,
  ]
})
export class DzematiModule { }
