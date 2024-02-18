import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocetnaComponent } from './pages/pocetna/pocetna.component';

const routes: Routes = [
  {path: 'pocetna', component: PocetnaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PocetnaRoutingModule { }
