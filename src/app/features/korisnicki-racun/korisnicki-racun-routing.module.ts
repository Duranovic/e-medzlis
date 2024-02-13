import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {KorisnickiRacunComponent} from "./pages/korisnicki-racun/korisnicki-racun.component";

const routes: Routes = [
  {
    path: 'korisnicki-racun',
    component: KorisnickiRacunComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KorisnickiRacunRoutingModule { }
