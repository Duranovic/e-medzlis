import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClanoviDetaljiComponent } from './pages/clanovi-detalji/clanovi-detalji.component';
import { ClanoviOpcenitoComponent } from './pages/clanovi-detalji/clanovi-opcenito/clanovi-opcenito.component';
import { ClanoviPlacanjeComponent } from './pages/clanovi-detalji/clanovi-placanje/clanovi-placanje.component';
import { ClanoviStatistikaComponent } from './pages/clanovi-detalji/clanovi-statistika/clanovi-statistika.component';
import { ClanoviPregledComponent } from './pages/clanovi-pregled/clanovi-pregled.component';

const routes: Routes = [
  { path: 'clanovi', component: ClanoviPregledComponent },
  {
    path: 'clanovi/:id', component: ClanoviDetaljiComponent, children: [
      { path: '', redirectTo: 'opcenito', pathMatch: 'full' },
      { path: 'opcenito', component: ClanoviOpcenitoComponent },
      { path: 'statistika', component: ClanoviStatistikaComponent },
      { path: 'placanje', component: ClanoviPlacanjeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClanoviRoutingModule { }
