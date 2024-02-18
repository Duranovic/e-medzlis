import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PocetnaComponent } from './pages/pocetna/pocetna.component';
import {PocetnaRoutingModule} from "./pocetna-routing.module";
@NgModule({
  declarations: [
    PocetnaComponent
  ],
  imports: [
    CommonModule,
    PocetnaRoutingModule
  ]
})
export class PocetnaModule { }
