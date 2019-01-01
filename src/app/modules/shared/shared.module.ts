import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SingleButtonComponent} from './components/single-button/single-button.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule,
  ],
  declarations: [SingleButtonComponent
  ],
  entryComponents: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SingleButtonComponent,
    FlexLayoutModule,
  ],
  providers: [],
})
export class SharedModule {
}
