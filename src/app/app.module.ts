import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

import { ScullyLibModule } from '@scullyio/ng-lib';
import { PublicModule } from './modules/public/public.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { styling } from './shared/styling.imports';
// function that returns `MarkedOptions` with renderer override

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PublicModule,
    AppRoutingModule,
    ScullyLibModule,
    styling,
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
