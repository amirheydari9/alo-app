import {Component, OnInit} from '@angular/core';
import * as fromStore from '../../store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ProductService} from '../../core/services/product.service';
import {IYear} from '../../data/models/IYear';
import {YearService} from '../../core/services/year.service';
import {IProduct} from '../../data/models/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  years: Observable<IYear[]>;
  product: Observable<IProduct>;

  constructor(
    private store: Store<fromStore.State>,
    private productService: ProductService,
    private yearService: YearService,
  ) {
    this.years = this.store.select(fromStore.getYears);
    this.product = this.store.select(fromStore.getProduct);
  }

  ngOnInit(): void {
    this.store.dispatch(new fromStore.GetYear());
    this.store.dispatch(new fromStore.GetProduct(2));
  }
}
