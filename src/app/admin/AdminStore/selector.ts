import { Observable, filter, map } from 'rxjs';
import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { adminState } from './state';

// featureKey pentru reducer-ul curent, DE DECLARAT in main.ts
export const adminKey = 'admin';

export const selectFeature = createFeatureSelector<adminState>(adminKey);
export const allTablesName = createSelector(selectFeature, (state) => {
  return state.allTablesName;
});
