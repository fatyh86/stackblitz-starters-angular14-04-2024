import {createAction, props} from '@ngrx/store'

// GET
export const get_tipProdus = createAction('[tipProdus] get_tipProdus')
export const get_tipProdus_ok = createAction(
  '[tipProdus] gettipProdus_Ok',
  props<{data: any}>()
)
export const get_tipProdus_err = createAction(
  '[tipProdus] gettipProdus_Error',
  props<{error: any}>()
)

// GET by id
export const get_tipProdus_id = createAction(
  '[tipProdusId] get_tipProdus_id',
props<{data: any}>())

export const get_tipProdus_id_ok = createAction(
  '[tipProdusId] gettipProdus_id_Ok',
  props<{data: any}>()
)
export const get_tipProdus_id_err = createAction(
  '[tipProdusId] gettipProdus_id_Error',
  props<{error: any}>()
)

// POST
export const post_tipProdus = createAction(
  '[tipProdus] posttipProdus',
  props<{content: any}>()
)
export const post_tipProdus_ok = createAction(
  '[tipProdus] posttipProdus_Ok',
  props<{data: any}>()
)
export const post_tipProdus_err = createAction(
  '[tipProdus] posttipProdus_Error',
  props<{error: any}>()
)

// EDIT
export const edit_tipProdus = createAction(
  '[tipProdus] edittipProdus',
  props<{content: any}>()
)
export const edit_tipProdus_ok = createAction(
  '[tipProdus] edittipProdus_Ok',
  props<{data: any}>()
)
export const edit_tipProdus_err = createAction(
  '[tipProdus] edittipProdus_Error',
  props<{error: any}>()
)

// FILTER
export const filter_tipProdus = createAction(
  '[tipProdus] filtertipProdus',
  props<{data: any}>()
)
export const filter_tipProdus_ok = createAction(
  '[tipProdus] filtertipProdus',
  props<{data: any}>()
)

export const tst = createAction(
  '[tst] tstMaterial',
  props<{data: number; interior: number}>()
)
