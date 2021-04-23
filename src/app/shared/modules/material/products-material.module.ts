import {NgModule} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';

const materialComponents = [
  MatButtonModule,
  MatChipsModule,
  MatTableModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSortModule,
  MatDialogModule,
  MatSelectModule,
  MatFormFieldModule,
  MatCardModule,
  MatTooltipModule,
];

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents],
})
export class ProductsMaterialModule {
}
