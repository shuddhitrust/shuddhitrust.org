import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './modules/public/components/pages/error/error.component';
import { uiroutes } from './shared/ui-routes';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: uiroutes.ERROR_ROUTE,
    pathMatch: 'full',
    component: ErrorPageComponent,
  },
  { path: '**', pathMatch: 'full', redirectTo: uiroutes.ERROR_ROUTE },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
