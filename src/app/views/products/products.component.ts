import {Component, OnDestroy, OnInit} from '@angular/core';
import * as fromStore from '../../store';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {ProductService} from '../../core/services/product.service';
import {IYear} from '../../data/models/IYear';
import {YearService} from '../../core/services/year.service';
import {IProduct} from '../../data/models/IProduct';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductModalComponent} from './product-modal/product-modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  years: Observable<IYear[]>;
  product: Observable<IProduct>;
  mockProduct: IProduct;
  form: FormGroup;
  subscription: Subscription = new Subscription();

  constructor(
    private store: Store<fromStore.State>,
    private productService: ProductService,
    private yearService: YearService,
    public dialog: MatDialog
  ) {
    this.years = this.store.select(fromStore.getYears);
    this.product = this.store.select(fromStore.getProduct);
  }

  ngOnInit(): void {
    this.store.dispatch(new fromStore.GetYear());
    this.initForm();
    this.subscription.add(
      this.form.controls.year.valueChanges.subscribe(data => {
        this.store.dispatch(new fromStore.GetProduct(data));
      })
    );
  }

  initForm() {
    this.form = new FormGroup({
      year: new FormControl(),
      title: new FormControl(),
      fa_title: new FormControl(),
      description: new FormControl(),
      count: new FormControl(),
      price: new FormControl(),
      discount: new FormControl(),
      is_special: new FormControl(),
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  submitForm(): void {
    const dialogRef = this.dialog.open(ProductModalComponent, {
      disableClose: false,
      data: {name: 'amir'}
    });
    dialogRef.afterClosed().subscribe(res => {

    });
  }
}
