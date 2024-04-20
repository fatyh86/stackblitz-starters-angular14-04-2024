import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as action from './actions';
import { of, from } from 'rxjs';
import {
  switchMap,
  map,
  catchError,
  withLatestFrom,
  tap,
  concatMap,
} from 'rxjs/operators';
// import { setLoadingSpinner } from 'src/app/shared/store/action';
import { service } from './service';
import { Route, Router, RouterLink } from '@angular/router';

@Injectable()
export class adminEffects {
  constructor(
    private action$: Actions,
    private store: Store<any>,
    private actionService: service,
    private router: Router
  ) {}

  // GET actions
  // getaction = createEffect(() =>
  //   this.action$.pipe(
  //     ofType(action.get_action),
  //     withLatestFrom(this.store.select(db_name)),
  //     concatMap(([db_name]) =>
  //       // Call the getTodos method, convert it to an observable
  //       from(this.actionService.__get(db_name.db_name)).pipe(
  //         // Take the returned value and return a new success action containing the todos
  //         map((content) => {
  //           // this.store.dispatch(setLoadingSpinner({ status: false }));
  //           return action.get_action_ok({
  //             data: { [db_name.db_name]: content },
  //             db_name: db_name.db_name,
  //           });
  //         }),

  //         // Or... if it errors return a new failure action containing the error
  //         catchError((error) => {
  //           // this.store.dispatch(setLoadingSpinner({ status: false }));
  //           return of(
  //             action.get_action_err({ error, db_name: db_name.db_name })
  //           );
  //         })
  //       )
  //     )
  //   )
  // );

  // Get ALL tabele
  getAllTableName = createEffect(() =>
    this.action$.pipe(
      ofType(action.getAllTabels_action),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.actionService.__getAllTableNames()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((content) => {
            return action.getAllTabels_action_ok({
              allTablesName: content,
            });
          }),

          // Or... if it errors return a new failure action containing the error
          catchError((error) => {
            // this.store.dispatch(setLoadingSpinner({ status: false }));
            return of(
              action.getAllTabels_action_err({
                error,
              })
            );
          })
        )
      )
    )
  );
}
