import {Component, OnInit} from '@angular/core';
import * as fromStore from '../../store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  selected = 'option2';
  id: Observable<string>;

  constructor(
    private store: Store<fromStore.State>
  ) {
    this.id = this.store.select(fromStore.getProductId);
  }

  ngOnInit(): void {
    this.store.dispatch(new fromStore.GetData());
  }
}
