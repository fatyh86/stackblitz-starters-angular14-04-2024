import { inject } from '@angular/core';
import { Store, createAction, props } from '@ngrx/store';

// GET
export const get_action = createAction(
  '[CRUD] Get data',
  props<{ db_name: string }>()
);
export const get_action_ok = createAction(
  '[CRUD] Get data ok',
  props<{ data: any; db_name: string }>()
);
export const get_action_err = createAction(
  '[CRUD] Get data error',
  props<{ error: any; db_name: string }>()
);

// GET by id
export const get_action_id = createAction(
  '[actionId] get_action_id',
  props<{ data: any }>()
);

export const get_action_id_ok = createAction(
  '[actionId] getaction_id_Ok',
  props<{ data: any }>()
);
export const get_action_id_err = createAction(
  '[actionId] getaction_id_Error',
  props<{ error: any }>()
);

// POST
export const post_action = createAction(
  '[action] postaction',
  props<{ content: any; db_name: string }>()
);
export const post_action_ok = createAction(
  '[action] postaction_Ok',
  props<{ data: any }>()
);
export const post_action_err = createAction(
  '[action] postaction_Error',
  props<{ error: any; db_name: string }>()
);

// EDIT
export const edit_action = createAction(
  '[action] editaction',
  props<{ content: any }>()
);
export const edit_action_ok = createAction(
  '[action] editaction_Ok',
  props<{ data: any }>()
);
export const edit_action_err = createAction(
  '[action] editaction_Error',
  props<{ error: any }>()
);

// FILTER
export const filter_action = createAction(
  '[action] filteraction',
  props<{ data: any }>()
);
export const filter_action_ok = createAction(
  '[action] filteraction',
  props<{ data: any }>()
);

export const tst = createAction(
  '[tst] tstMaterial',
  props<{ data: number; interior: number }>()
);

// FILTER by Column value
export const filter_bycolumn_action = createAction(
  '[action] filter_bycolumn_action',
  props<{ db_name: string; column: string; value: any }>()
);
export const filter_bycolumn_action_ok = createAction(
  '[action] filter_bycolumn_action_ok',
  props<{ data: any; db_name: string }>()
);
export const filter_bycolumn_action_err = createAction(
  '[action] filter_bycolumn_action_Error',
  props<{ error: any; db_name: string }>()
);
