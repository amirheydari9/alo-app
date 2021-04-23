import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductState} from '../_model/ProductState';

export const getProductState = createFeatureSelector<ProductState>('products');

export const getYears = createSelector(getProductState, (state) => {
  return state.years;
});

export const getProduct = createSelector(getProductState, (state) => {
  return state.product;
});
