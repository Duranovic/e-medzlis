import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from './icon/icon.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { TableComponent } from './table/table.component';
import { TitleComponent } from './title/title.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { SelectComponent } from './select/select.component';
import { ActionPanelComponent } from './action-panel/action-panel.component';
import { StatisticsCardComponent } from './statistics-card/statistics-card.component';
import { NumberPlaceholderComponent } from './number-placeholder/number-placeholder.component';
import { CoreModule } from '../core/core.module';

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
    NumberPlaceholderComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    ReactiveFormsModule,
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
    NumberPlaceholderComponent
  ]
})
export class SharedModule { }
