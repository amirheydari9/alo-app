import {Component, OnInit} from '@angular/core';
import * as fromStore from '../../store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ProductService} from '../../core/services/product.service';
import {IYear} from '../../data/models/IYear';
import {YearService} from '../../core/services/year.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  years: Observable<IYear[]>;

  constructor(
    private store: Store<fromStore.State>,
    private productService: ProductService,
    private yearService: YearService,
  ) {
    this.years = this.store.select(fromStore.getYears);
  }

  ngOnInit(): void {
    this.store.dispatch(new fromStore.GetYear());
  }
}
