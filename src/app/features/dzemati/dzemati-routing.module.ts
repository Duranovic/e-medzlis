import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DzematiPregledComponent } from './pages/dzemati-pregled/dzemati-pregled.component';

const routes: Routes = [{
  path: 'dzemati', component: DzematiPregledComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DzematiRoutingModule { }
