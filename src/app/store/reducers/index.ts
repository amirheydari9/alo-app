import {ActionReducerMap} from '@ngrx/store';
import {productsReducer} from '../reducers/product.reducers';
import {ProductState} from '../_model/ProductState';

export interface State {
  products: ProductState;
}

export const reducers: ActionReducerMap<State> = {
  products: productsReducer,
};
