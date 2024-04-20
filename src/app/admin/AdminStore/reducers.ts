import { createFeature, Action, createReducer, on } from '@ngrx/store';
import * as action from './actions';
import { adminState, initialState } from './state';

export const adminReducer = createReducer(
  initialState,
  on(action.getAllTabels_action_ok, (state, { allTablesName }) => ({
    ...state,
    allTablesName: allTablesName,
  }))
);

export function actionReducer(state: adminState, action: Action) {
  return adminReducer(state, action);
}
