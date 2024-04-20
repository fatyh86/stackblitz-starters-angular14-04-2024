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

// GET All table names
export const getAllTabels_action = createAction('[admin] getAllTabels_action');
export const getAllTabels_action_ok = createAction(
  '[admin] getAllTabels_action_ok',
  props<{ allTablesName: any }>()
);
export const getAllTabels_action_err = createAction(
  '[admin] getAllTabels_action_Error',
  props<{ error: any }>()
);
