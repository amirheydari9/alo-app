import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductsComponent} from './products.component';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductsMaterialModule} from '../../shared/modules/material/products-material.module';
import {ProductModalComponent} from './product-modal/product-modal.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    ProductsMaterialModule,
  ],
  providers: [],
  entryComponents: [ProductModalComponent]
})
export class ProductModule {
}
