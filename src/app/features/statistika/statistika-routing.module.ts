import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatistikaComponent } from './pages/statistika/statistika.component';

const routes: Routes = [
  { 
    path: 'statistika', component: StatistikaComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatistikaRoutingModule { }
