import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ViewsModule } from './views/views.module';
import { LayoutModule } from './layout/layout.module';
import { LoginService } from './core/services/login.service';
import { DzematiModule } from './features/dzemati/dzemati.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClanoviModule } from './features/clanovi/clanovi.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    ViewsModule,
    LayoutModule,    
    FeaturesModule,
    AppRoutingModule,
    DzematiModule,
    BrowserAnimationsModule,
    ClanoviModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
