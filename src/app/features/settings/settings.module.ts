import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './pages/settings/settings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "../../core/core.module";
import { DopustenjaComponent } from './pages/settings/dopustenja/dopustenja.component';
import { ClanarineComponent } from './pages/settings/clanarine/clanarine.component';


@NgModule({
  declarations: [
    SettingsComponent,
    DopustenjaComponent,
    ClanarineComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SettingsRoutingModule,
    ReactiveFormsModule,
    CoreModule,
  ]
})
export class SettingsModule { }
