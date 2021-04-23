import {Component, OnInit} from '@angular/core';
import * as fromStore from '../../store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ProductService} from '../../core/services/product.service';
import {IYear} from '../../data/models/IYear';
import {YearService} from '../../core/services/year.service';
import {IProduct} from '../../data/models/IProduct';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  years: Observable<IYear[]>;
  product: Observable<IProduct>;
  form: FormGroup;

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
    this.initForm();
    this.form.controls.year.valueChanges.subscribe(data => {
      this.store.dispatch(new fromStore.GetProduct(data));
    });
  }

  initForm() {
    this.form = new FormGroup({
      year: new FormControl(),
      title: new FormControl(),
      fa_title: new FormControl(),
      description: new FormControl(),
      count: new FormControl(),
      cost: new FormControl(),
      discount: new FormControl(),
      is_special: new FormControl(),
    });
  }
}
