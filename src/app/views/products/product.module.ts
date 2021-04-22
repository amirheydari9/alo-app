import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductsComponent} from './products.component';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductsMaterialModule} from '../../shared/modules/material/products-material.module';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    ProductsMaterialModule,
    MatSelectModule
  ],
  providers: [],
})
export class ProductModule {
}
