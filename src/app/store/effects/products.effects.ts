import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import * as AllProductsAction from '../actions/products.actions';
import {switchMap, map, catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {YearService} from '../../core/services/year.service';

@Injectable()
export class ProductsEffects {
  constructor(private action$: Actions, private yearService: YearService) {
  }

  @Effect()
  LoadYears$ = this.action$.pipe(ofType(AllProductsAction.GetYearActionTypes.GET_YEAR))
    .pipe(
      switchMap(() => {
        return this.yearService.getYears().pipe(
          map(years => new AllProductsAction.GetYearSuccess(years)),
          catchError(error => of(new AllProductsAction.GetYearFail(error)))
        );
      })
    );
}
