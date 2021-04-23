import {AllProductsAction, GetProductActionTypes, GetYearActionTypes} from '../actions';
import {ProductState} from '../_model/ProductState';

export const initProductsState: ProductState = {
  years: [],
  product: null
};

export function productsReducer(state = initProductsState, action: AllProductsAction): ProductState {
  switch (action.type) {

    case GetYearActionTypes.GET_YEAR_SUCCESS:
      return {
        ...state,
        years: action.payload
      };
    case GetProductActionTypes.GET_PRODUCT:
      return {
        ...state,
        product: null
      };
    case GetProductActionTypes.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload[0]
      };
    default:
      return state;
  }
}
