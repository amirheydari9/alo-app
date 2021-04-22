import {Action} from '@ngrx/store';
import {IData} from '../../data/models/data';

export enum GetDataActionTypes {
  GET_DATA = '[GET DATA] Load',
  GET_DATA_SUCCESS = '[GET DATA] Load success',
  GET_DATA_FAIL = '[GET DATA] Load Fail',
}

export class GetData implements Action {
  readonly type = GetDataActionTypes.GET_DATA;
}

export class GetDataSuccess implements Action {
  readonly type = GetDataActionTypes.GET_DATA_SUCCESS;
  constructor(public payload: IData) {
  }
}

export class GetDataFail implements Action {
  readonly type = GetDataActionTypes.GET_DATA_FAIL;
  constructor(public payload: string) {
  }
}


export type AllProductsAction =
  GetData | GetDataSuccess | GetDataFail;
