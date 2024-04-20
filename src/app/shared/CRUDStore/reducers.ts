import { createFeature, Action, createReducer, on } from '@ngrx/store';
import * as action from './actions';
import { filter, map } from 'rxjs';
import { crudState, initialState } from './state';
import { db_name } from './selector';

export const crudReducer = createReducer(
  initialState,
  on(action.get_action, (state, { db_name }) => ({
    ...state,
    db_name: db_name,
  })),
  on(action.get_action_ok, (state, { data, db_name }) => ({
    ...state,
    data_preluate: true,
    db_name: db_name,
    dataArr: [...state.dataArr, data],
    data: Object.assign({}, ...state.dataArr.concat(data)),
  })),
  on(action.get_action_err, (state, { error, db_name }) => ({
    ...state,
    data_preluate: false,
    db_name: db_name,
  })),
  on(action.get_action_id_ok, (state, { data }) => ({
    ...state,
    // actions_preluate: true,
    item_id: data,
  })),
  on(action.post_action_ok, (state) => ({
    ...state,
    data_trimise: 1,
  })),
  on(action.filter_action_ok, (state, { data }) => ({
    ...state,
    cautaItem: data,
  })),
  on(action.filter_bycolumn_action_ok, (state, { data, db_name }) => ({
    ...state,
    filterByColumn: data,
    db_name: db_name,
  }))
);

export function actionReducer(state: crudState, action: Action) {
  return crudReducer(state, action);
}
