import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductState} from '../_model/ProductState';

export const getProductState = createFeatureSelector<ProductState>('products');

export const getProductId = createSelector(getProductState, (state) => {
  return state.id;
});
