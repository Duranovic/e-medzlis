import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlPipe } from './pipes/form-control.pipe';
import { SplitStringPipe } from './pipes/split.pipe';

@NgModule({
  declarations: [FormControlPipe, SplitStringPipe],
  imports: [
    CommonModule,
  ],
  exports: [FormControlPipe, SplitStringPipe],
})
export class CoreModule { }
