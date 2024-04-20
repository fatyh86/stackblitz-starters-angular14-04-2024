// angajati

export interface crudState {
  db_name: string;
  data_preluate: boolean;
  data_trimise: number;
  data: {};
  dataArr: any[];
  filterByColumn: any;
}

export const initialState: crudState = {
  db_name: '',
  data_preluate: false,
  data_trimise: 0,
  data: {},
  dataArr: [],
  filterByColumn: {},
};
