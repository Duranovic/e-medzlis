// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// User defined modules
import { AuthentificationModule } from './authentification/authentification.module';
import { DzematiModule } from './dzemati/dzemati.module';
import { ClanoviModule } from './clanovi/clanovi.module';
import { StatistikaModule } from './statistika/statistika.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthentificationModule,
    DzematiModule,
    ClanoviModule,
    StatistikaModule,
    SettingsModule,
  ]
})
export class FeaturesModule { }
