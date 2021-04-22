import {AllProductsAction, GetDataActionTypes} from '../actions';
import {ProductState} from '../_model/ProductState';

export const initProductsState: ProductState = {
  id: '',
};

export function productsReducer(state = initProductsState, action: AllProductsAction): ProductState {
  switch (action.type) {
    case GetDataActionTypes.GET_DATA:
      break;
    default:
      return state;
  }
}
