import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CalculatorComponent} from './modules/dashboard/calculator/calculator.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/calculator',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
