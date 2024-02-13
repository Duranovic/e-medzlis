import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    SideNavigationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatDialogModule,
  ],
  exports: [
    SideNavigationComponent
  ]
})
export class LayoutModule { }
