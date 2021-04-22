import {Action} from '@ngrx/store';
import {Year} from '../../data/models/Year';

export enum GetYearActionTypes {
  GET_YEAR = '[GET YEAR] Load',
  GET_YEAR_SUCCESS = '[GET YEAR] Load success',
  GET_YEAR_FAIL = '[GET YEAR] Load Fail',
}

export class GetYear implements Action {
  readonly type = GetYearActionTypes.GET_YEAR;
}

export class GetYearSuccess implements Action {
  readonly type = GetYearActionTypes.GET_YEAR_SUCCESS;
  constructor(public payload: Year[]) {
  }
}

export class GetYearFail implements Action {
  readonly type = GetYearActionTypes.GET_YEAR_FAIL;
  constructor(public payload: string) {
  }
}


export type AllProductsAction =
  GetYear | GetYearSuccess | GetYearFail;
