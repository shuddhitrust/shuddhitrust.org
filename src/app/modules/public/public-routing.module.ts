import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { uiroutes } from 'src/app/shared/ui-routes';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PrivacyComponent } from './components/pages/privacy/privacy.component';
import { SupportComponent } from './components/pages/support/support.component';

/**
 * Public routes
 *  ***NOTE*** - In order for routes to be available without logging in,
 * special provisions need to be made on public.component.html and the corresponding .ts file.
 * Without making these changes the route would not show.
 */
const routes: Routes = [
  {
    path: uiroutes.PRIVACY_ROUTE,
    component: PrivacyComponent,
    pathMatch: 'full',
  },
  { path: uiroutes.ABOUT_ROUTE, component: AboutComponent },
  { path: uiroutes.SUPPORT_ROUTE, component: SupportComponent },
  {
    path: uiroutes.CONTACT_ROUTE,
    loadChildren: () =>
      import('./modules/contact/contact.module').then((m) => m.ContactModule),
  },
  { path: 'privacy', component: PrivacyComponent },
  { path: '', component: HomeComponent },
  // End of public routes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
