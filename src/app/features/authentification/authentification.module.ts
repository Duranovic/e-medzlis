import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthentificationRoutingModule } from './authentification-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,    
    SharedModule,
    AuthentificationRoutingModule,
  ]
})
export class AuthentificationModule { }
