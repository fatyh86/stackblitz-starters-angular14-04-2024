import { Observable, filter, map } from 'rxjs';
import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { crudState } from './state';

// featureKey pentru reducer-ul curent, DE DECLARAT in main.ts
export const crudKey = 'CRUD';

export const selectFeature = createFeatureSelector<crudState>(crudKey);
export const db_name = createSelector(selectFeature, (state) => {
  return state.db_name;
});

export const allData = createSelector(selectFeature, (state) => {
  // let ddd = [state.data];
  // return state.dataArr.map((dd: any) => dd[db_name]);
  return state.data;
});
export const crudStatus = createSelector(selectFeature, (state) => {
  return state.data_preluate;
});
export const filterByColumn = createSelector(selectFeature, (state) => {
  return state.filterByColumn;
});

export const selectFeature1 = createFeatureSelector<crudState>(crudKey);
// export const allangajati_id = createSelector(selectFeature1, (state) => {
//   console.log(state.item_id);
//   let detrimis = new Array(state.item_id);
// let detrimis = state.angajati_id;
// return detrimis;
// return state.angajati_id
// });

// export const matType = createSelector(selectFeature, (state) => {
//   return state.matType;
// });
// export const matInterior = createSelector(selectFeature, (state) => {
//   return state.interior;
// });

// export const selectHPU = createSelector(
//   selectMateriale,
//   matType,
//   matInterior,
//   (m: any, matType: number, interior: number) => {
//     return m.filter((x: any) => {
//       if (x.tip_material_id == matType && x.interior > interior) {
//         return x;
//       }
//     });
//     //  return m.pipe(map((x:any)=> x));

//     // materiale.pipe(
//     //   map((plans: any) => plans.filter((plan: any) => plan.interior == 13))
//     // );
//   }
// );
