import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { ErrorPageComponent } from './components/pages/error/error.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PrivacyComponent } from './components/pages/privacy/privacy.component';
import { AboutComponent } from './components/pages/about/about.component';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './components/pages/support/support.component';
import { RefundComponent } from './components/pages/refund/refund.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { styling } from 'src/app/shared/styling.imports';

const declarations = [
  HomeComponent,
  AboutComponent,
  PrivacyComponent,
  ErrorPageComponent,
  SupportComponent,
  RefundComponent,
  TermsConditionsComponent,
];

@NgModule({
  declarations,
  exports: [...declarations],
  imports: [CommonModule, PublicRoutingModule, styling],
})
export class PublicModule {}
