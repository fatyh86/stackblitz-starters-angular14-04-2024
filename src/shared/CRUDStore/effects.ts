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
import { allData, db_name } from './selector';

@Injectable()
export class crudEffects {
  constructor(
    private action$: Actions,
    private store: Store<any>,
    private actionService: service,
    private router: Router
  ) {}

  // GET actions
  getaction = createEffect(() =>
    this.action$.pipe(
      ofType(action.get_action),
      withLatestFrom(this.store.select(db_name)),
      concatMap(([db_name]) =>
        // Call the getTodos method, convert it to an observable
        from(this.actionService.__get(db_name.db_name)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((content) => {
            // this.store.dispatch(setLoadingSpinner({ status: false }));
            return action.get_action_ok({
              data: { [db_name.db_name]: content },
              db_name: db_name.db_name,
            });
          }),

          // Or... if it errors return a new failure action containing the error
          catchError((error) => {
            // this.store.dispatch(setLoadingSpinner({ status: false }));
            return of(
              action.get_action_err({ error, db_name: db_name.db_name })
            );
          })
        )
      )
    )
  );

  // Filter by column value
  filterColumn = createEffect(() =>
    this.action$.pipe(
      ofType(action.filter_bycolumn_action),
      withLatestFrom(this.store.select(db_name)),
      switchMap(([data]) =>
        // Call the getTodos method, convert it to an observable
        from(
          this.actionService.__filterByColumn(
            data.db_name,
            data.column,
            data.value
          )
        ).pipe(
          // Take the returned value and return a new success action containing the todos
          map((content) => {
            // this.store.dispatch(setLoadingSpinner({ status: false }));
            return action.filter_bycolumn_action_ok({
              data: content,
              db_name: data.db_name,
            });
          }),

          // Or... if it errors return a new failure action containing the error
          catchError((error) => {
            // this.store.dispatch(setLoadingSpinner({ status: false }));
            return of(
              action.filter_bycolumn_action_err({
                error,
                db_name: data.db_name,
              })
            );
          })
        )
      )
    )
  );

  // GET action by ID
  getactionid = createEffect(() =>
    this.action$.pipe(
      ofType(action.get_action_id),
      withLatestFrom(this.store.select(action.get_action_id)),
      switchMap(([data]: any) =>
        // Call the getTodos method, convert it to an observable
        from(this.actionService.__get_id(data.data)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((content) => {
            console.log('effect', content);

            // this.store.dispatch(setLoadingSpinner({ status: false }));
            return action.get_action_id_ok({ data: content });
          }),

          // Or... if it errors return a new failure action containing the error
          catchError((error) => {
            // this.store.dispatch(setLoadingSpinner({ status: false }));
            return of(action.get_action_id_err({ error }));
          })
        )
      )
    )
  );

  // Post actions
  postAction = createEffect(() =>
    this.action$.pipe(
      ofType(action.post_action),
      withLatestFrom(this.store.select(db_name)),
      switchMap(([content]) =>
        // Call the getTodos method, convert it to an observable
        from(
          this.actionService.__postNew(content.content, content.db_name)
        ).pipe(
          // Take the returned value and return a new success action containing the todos
          map((content) => {
            // this.store.dispatch(setLoadingSpinner({ status: false }));
            return action.post_action_ok({
              data: content,
            });
          }),

          // Or... if it errors return a new failure action containing the error
          catchError((error) => {
            // this.store.dispatch(setLoadingSpinner({ status: false }));
            return of(
              action.post_action_err({ error, db_name: content.db_name })
            );
          })
        )
      )
    )
  );

  // postNavigate$ = createEffect(
  //   () =>
  //     this.action$.pipe(
  //       ofType(action.post_action_ok),
  //       tap(() => {
  //         console.log('iniciando la navegacion');

  //         this.router.navigate(['/tip-produs']);
  //       })
  //     ),
  //   { dispatch: false }
  // );

  filterNavigate$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(action.filter_action),
        map((data) => {
          console.log('iniciando la navegacion');
          return action.filter_action_ok({ data: data });
        })
      ),
    { dispatch: false }
  );

  // Edit action
  editNewaction = createEffect(() =>
    this.action$.pipe(
      ofType(action.edit_action),
      withLatestFrom(this.store.select(action.edit_action)),
      switchMap(([content]: any) =>
        // Call the service edit method
        from(this.actionService.__edit(content.content)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((content) => {
            // this.store.dispatch(setLoadingSpinner({ status: false }));
            return action.edit_action_ok({ data: content });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(action.edit_action_err({ error })))
        )
      )
    )
  );

  editNavigate$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(action.edit_action_ok),
        tap(() => {
          console.log('iniciando la navegacion');

          this.router.navigate(['/tip-produs']);
        })
      ),
    { dispatch: false }
  );
  // end edit
}
