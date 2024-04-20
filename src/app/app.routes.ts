import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'table',
    loadChildren: () =>
      import('../app/shared/shared.routes').then((m) => m.tableType1Routes),
  },
  {
    path: 'toti-angajatii',
    loadChildren: () =>
      import('../app/angajati/angajati.routes').then(
        (m) => m.totiAngajatiiRoutes
      ),
  },
  {
    path: 'add-angajati',
    loadChildren: () =>
      import('../app/angajati/angajati.routes').then(
        (m) => m.addAngajatiRoutes
      ),
  },
  {
    path: 'all-tables',
    loadChildren: () =>
      import('../app/admin/admin.routes').then((m) => m.adminRoutes),
  },
];
