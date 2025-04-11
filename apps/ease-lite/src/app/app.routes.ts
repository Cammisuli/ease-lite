import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'loans',
    loadChildren: () =>
      import('@ease-lite/loans-routes').then((m) => m.loansRoutesRoutes),
  },
  {
    path: 'card',
    loadChildren: () =>
      import('@ease-lite/card-routes').then((m) => m.cardRoutesRoutes),
  },
  {
    path: 'bank',
    loadChildren: () =>
      import('@ease-lite/bank-routes').then((m) => m.bankRoutesRoutes),
  },
];
