import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import * as AllProductsAction from '../actions/products.actions';
import {switchMap, map, catchError} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {YearService} from '../../core/services/year.service';
import {ProductService} from '../../core/services/product.service';
import {Action} from '@ngrx/store';

@Injectable()
export class ProductsEffects {
  constructor(
    private action$: Actions,
    private yearService: YearService,
    private productService: ProductService
  ) {
  }

  @Effect()
  LoadYears$: Observable<Action> = this.action$.pipe(ofType(AllProductsAction.GetYearActionTypes.GET_YEAR))
    .pipe(
      switchMap(() => {
        return this.yearService.getYears().pipe(
          map(years => new AllProductsAction.GetYearSuccess(years)),
          catchError(error => of(new AllProductsAction.GetYearFail(error)))
        );
      })
    );

  @Effect()
  LoadProduct$: Observable<Action> = this.action$.pipe(ofType(AllProductsAction.GetProductActionTypes.GET_PRODUCT))
    .pipe(
      switchMap((action) => {
        return this.productService.getProductByYearId(action['payload']).pipe(
          map(product => new AllProductsAction.GetProductSuccess(product)),
          catchError(error => of(new AllProductsAction.GetProductFail(error)))
        );
      })
    );
}
