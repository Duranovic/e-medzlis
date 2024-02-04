import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlPipe } from './pipes/form-control.pipe';
import { SplitStringPipe } from './pipes/split.pipe';
import {FormGroupPipe} from "./pipes/form-group.pipe";

@NgModule({
  declarations: [FormControlPipe, SplitStringPipe, FormGroupPipe],
  imports: [
    CommonModule,
  ],
  exports: [FormControlPipe, SplitStringPipe, FormGroupPipe],
})
export class CoreModule { }
