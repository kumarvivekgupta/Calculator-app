import {NgModule} from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {HttpClientModule} from '@angular/common/http';

const materialModules = [
  MatInputModule,
  MatToolbarModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatTabsModule,
  MatTooltipModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatSliderModule,
  MatDialogModule,
  MatRippleModule,
  MatSelectModule,
  MatListModule,
  MatTableModule,
  CdkTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatRadioModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatProgressBarModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatGridListModule,
  HttpClientModule
];

@NgModule({
  declarations: [],
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule {
}
