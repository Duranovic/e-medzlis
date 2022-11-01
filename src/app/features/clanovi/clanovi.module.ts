// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// User defined modules
import { ClanoviRoutingModule } from './clanovi-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { ClanoviPregledComponent } from './pages/clanovi-pregled/clanovi-pregled.component';
import { ClanoviComponent } from 'src/app/standalone/clanovi/clanovi.component';
import { ClanoviDetaljiComponent } from './pages/clanovi-detalji/clanovi-detalji.component';
import { ClanoviOpcenitoComponent } from './pages/clanovi-detalji/clanovi-opcenito/clanovi-opcenito.component';
import { ClanoviPlacanjeComponent } from './pages/clanovi-detalji/clanovi-placanje/clanovi-placanje.component';
import { ClanoviStatistikaComponent } from './pages/clanovi-detalji/clanovi-statistika/clanovi-statistika.component';


@NgModule({
  declarations: [
    ClanoviPregledComponent,
    ClanoviDetaljiComponent,
    ClanoviOpcenitoComponent,
    ClanoviPlacanjeComponent,
    ClanoviStatistikaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClanoviComponent,
    ClanoviRoutingModule
  ]
})
export class ClanoviModule { }