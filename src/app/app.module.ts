import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { StylingImports } from './styling.imports';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ScullyLibModule,
    StylingImports,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

