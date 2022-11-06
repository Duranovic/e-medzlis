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
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ClanoviEvidencijaComponent } from './pages/clanovi-evidencija/clanovi-evidencija.component';
import { ClanoviEvidentirajModalComponent } from './pages/clanovi-evidentiraj-modal/clanovi-evidentiraj-modal.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ClanoviPregledComponent,
    ClanoviDetaljiComponent,
    ClanoviOpcenitoComponent,
    ClanoviPlacanjeComponent,
    ClanoviStatistikaComponent,
    ClanoviEvidencijaComponent,
    ClanoviEvidentirajModalComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatDialogModule,
    SharedModule,
    CoreModule,
    ReactiveFormsModule,
    ClanoviComponent,
    ClanoviRoutingModule,
  ]
})
export class ClanoviModule { }
