import {AllProductsAction, GetDataActionTypes} from '../actions';
import {ProductState} from '../_model/ProductState';

export const initProductsState: ProductState = {
  id: '12',
  name: 'amir',
};

export function productsReducer(state = initProductsState, action: AllProductsAction): ProductState {
  switch (action.type) {
    case GetDataActionTypes.GET_DATA:
      return {
        ...state,
        id: '1111'
      };
      break;
    default:
      return state;
  }
}
