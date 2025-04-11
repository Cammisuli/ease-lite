import { Route } from '@angular/router';

export const loansRoutesRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@ease-lite/loans-accounts').then((m) => m.AccountsComponent),
  },
];
