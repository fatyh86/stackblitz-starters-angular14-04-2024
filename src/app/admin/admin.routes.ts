import { Route } from '@angular/router';
import { FormsTablesComponent } from './forms/components/forms-tables/forms-tables.component';

export const adminRoutes: Route[] = [
  {
    path: '',
    component: FormsTablesComponent,
  },
];
