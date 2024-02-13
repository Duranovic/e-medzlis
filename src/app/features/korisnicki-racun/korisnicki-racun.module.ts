import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KorisnickiRacunComponent } from './pages/korisnicki-racun/korisnicki-racun.component';
import { KorisnickiRacunDialogComponent } from './modals/korisnicki-racun-dialog/korisnicki-racun-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {CoreModule} from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";
import {KorisnickiRacunRoutingModule} from "./korisnicki-racun-routing.module";
import { OsobniPodaciComponent } from './pages/korisnicki-racun/osobni-podaci/osobni-podaci.component';
import { RacunComponent } from './pages/korisnicki-racun/racun/racun.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    KorisnickiRacunComponent,
    KorisnickiRacunDialogComponent,
    OsobniPodaciComponent,
    RacunComponent
  ],
    imports: [
        CommonModule,
        MatDialogModule,
        CoreModule,
        SharedModule,
        KorisnickiRacunRoutingModule,
        ReactiveFormsModule,
    ]
})
export class KorisnickiRacunModule { }
