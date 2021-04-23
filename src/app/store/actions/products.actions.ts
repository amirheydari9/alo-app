import {Action} from '@ngrx/store';
import {IYear} from '../../data/models/IYear';
import {IProduct} from '../../data/models/IProduct';

export enum GetYearActionTypes {
  GET_YEAR = '[GET YEAR] Load',
  GET_YEAR_SUCCESS = '[GET YEAR] Load success',
  GET_YEAR_FAIL = '[GET YEAR] Load Fail',
}

export enum GetProductActionTypes {
  GET_PRODUCT = '[GET PRODUCT] Load',
  GET_PRODUCT_SUCCESS = '[GET PRODUCT] Load success',
  GET_PRODUCT_FAIL = '[GET PRODUCT] Load Fail',
}


export class GetYear implements Action {
  readonly type = GetYearActionTypes.GET_YEAR;
}

export class GetYearSuccess implements Action {
  readonly type = GetYearActionTypes.GET_YEAR_SUCCESS;

  constructor(public payload: IYear[]) {
  }
}

export class GetYearFail implements Action {
  readonly type = GetYearActionTypes.GET_YEAR_FAIL;
  constructor(public payload: string) {
  }
}

export class GetProduct implements Action {
  readonly type = GetProductActionTypes.GET_PRODUCT;
  constructor(public payload: number) {
  }
}

export class GetProductSuccess implements Action {
  readonly type = GetProductActionTypes.GET_PRODUCT_SUCCESS;
  constructor(public payload: IProduct) {
  }
}

export class GetProductFail implements Action {
  readonly type = GetProductActionTypes.GET_PRODUCT_FAIL;
  constructor(public payload: string) {
  }
}

export type AllProductsAction =
  GetYear | GetYearSuccess | GetYearFail |
  GetProduct | GetProductSuccess | GetProductFail;
