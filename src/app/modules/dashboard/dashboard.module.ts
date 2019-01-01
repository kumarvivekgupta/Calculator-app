import {CalculatorComponent} from './calculator/calculator.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {DashboardRoutingModule} from './dashboard.routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
  ],
  providers: []
})
export class DashboardModule {
}
