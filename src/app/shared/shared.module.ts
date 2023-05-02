import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { IconComponent } from './icon/icon.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { TableComponent } from './table/table.component';
import { TitleComponent } from './title/title.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { SelectComponent } from './select/select.component';
import { ActionPanelComponent } from './action-panel/action-panel.component';
import { StatisticsCardComponent } from './statistics-card/statistics-card.component';
import { NumberPlaceholderComponent } from './number-placeholder/number-placeholder.component';
import { SnackbarMessageComponent } from './snackbar-message/snackbar-message.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SaveCancelBarComponent } from './save-cancel-bar/save-cancel-bar.component';

@NgModule({
  declarations: [
    InputComponent,
    IconComponent,
    InputSearchComponent,
    TableComponent,
    TitleComponent,
    BreadcrumbComponent,
    NavTabsComponent,
    SelectComponent,
    ActionPanelComponent,
    StatisticsCardComponent,
    NumberPlaceholderComponent,
    SnackbarMessageComponent,
    SaveCancelBarComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [
    InputComponent,
    IconComponent,
    InputSearchComponent,
    TableComponent,
    TitleComponent,
    BreadcrumbComponent,
    NavTabsComponent,
    SelectComponent,
    ActionPanelComponent,
    StatisticsCardComponent,
    NumberPlaceholderComponent,
    SnackbarMessageComponent,
    SaveCancelBarComponent,
  ]
})
export class SharedModule { }
