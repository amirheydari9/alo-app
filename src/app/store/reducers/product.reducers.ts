import {AllProductsAction, GetYearActionTypes} from '../actions';
import {ProductState} from '../_model/ProductState';

export const initProductsState: ProductState = {
  years: []
};

export function productsReducer(state = initProductsState, action: AllProductsAction): ProductState {
  switch (action.type) {
    case GetYearActionTypes.GET_YEAR_SUCCESS:
      return {
        ...state,
        years: action.payload
      };
    default:
      return state;
  }
}
