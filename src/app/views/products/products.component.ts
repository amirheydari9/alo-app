import {Component, OnInit} from '@angular/core';
import * as fromStore from '../../store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ProductService} from '../../core/services/product.service';
import {Years} from '../../data/models/Years';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  selected = 'option2';
  id: Observable<string>;
  years: Observable<Years[]>;

  constructor(
    private store: Store<fromStore.State>,
    private productService: ProductService
  ) {
    this.id = this.store.select(fromStore.getProductId);
  }

  ngOnInit(): void {
    this.years = this.productService.getYears();
    this.store.dispatch(new fromStore.GetData());
  }
}
