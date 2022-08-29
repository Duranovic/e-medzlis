import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from './icon/icon.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    InputComponent,
    IconComponent,
    InputSearchComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    InputComponent,
    IconComponent,
    InputSearchComponent,
    TableComponent
  ]
})
export class SharedModule { }
