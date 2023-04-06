// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// User defined modules
import { AuthentificationModule } from './authentification/authentification.module';
import { DzematiModule } from './dzemati/dzemati.module';
import { SharedModule } from '../shared/shared.module';
import { ClanoviModule } from './clanovi/clanovi.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthentificationModule,
    SharedModule,
    DzematiModule,
    ClanoviModule,
  ]
})
export class FeaturesModule { }
