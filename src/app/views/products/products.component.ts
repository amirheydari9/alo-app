import {Component, OnInit} from '@angular/core';
import * as fromStore from '../../store';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  selected = 'option2';

  constructor(
    private store: Store<fromStore.State>
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(new fromStore.GetData());
  }

}
