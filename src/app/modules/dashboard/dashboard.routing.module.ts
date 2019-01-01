import {RouterModule, Routes} from '@angular/router';
import {CalculatorComponent} from './calculator/calculator.component';
import {NgModule} from '@angular/core';

export const dashboardRoutes: Routes = [
  {
    path: '',
    redirectTo: '/calculator',
    pathMatch: 'full'
  },
  {
    path: 'calculator',
    component: CalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}

