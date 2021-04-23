import {IYear} from '../../data/models/IYear';
import {IProduct} from '../../data/models/IProduct';

export interface ProductState {
  years: IYear[];
  product: IProduct;
}
