import { Route } from '@angular/router';
import { TotiAngajatiiComponent } from './components/toti-angajatii/toti-angajatii.component';
import { AddAngajatiComponent } from './components/add-angajati/add-angajati.component';

export const totiAngajatiiRoutes: Route[] = [
  {
    path: '',
    component: TotiAngajatiiComponent,
  },
];
export const addAngajatiRoutes: Route[] = [
  {
    path: '',
    component: AddAngajatiComponent,
  },
];
