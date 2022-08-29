import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthentificationModule } from './authentification/authentification.module';
import { DzematiModule } from './dzemati/dzemati.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthentificationModule,
    DzematiModule,
    SharedModule,
  ]
})
export class FeaturesModule { }
