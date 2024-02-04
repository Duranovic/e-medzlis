import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DzematiClanoviComponent } from './pages/dzemati-detalji/dzemati-clanovi/dzemati-clanovi.component';
import { DzematiDetaljiComponent } from './pages/dzemati-detalji/dzemati-detalji.component';
import { DzematiStatistikaComponent } from './pages/dzemati-detalji/dzemati-statistika/dzemati-statistika.component';
import { DzematiUpravaComponent } from './pages/dzemati-detalji/dzemati-uprava/dzemati-uprava.component';
import { DzematiPregledComponent } from './pages/dzemati-pregled/dzemati-pregled.component';

const routes: Routes = [
  {
    path: 'dzemati',
    component: DzematiPregledComponent,
  },
  {
    path: 'dzemati/:id',
    component: DzematiDetaljiComponent,
    children: [
      { path: '', redirectTo: 'clanovi', pathMatch: 'full' },
      { path: 'clanovi', component: DzematiClanoviComponent },
      { path: 'uprava', component: DzematiUpravaComponent },
      { path: 'statistika', component: DzematiStatistikaComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DzematiRoutingModule { }
