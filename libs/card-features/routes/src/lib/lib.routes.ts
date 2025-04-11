import { Route } from '@angular/router';

export const cardRoutesRoutes: Route[] = [
  {
    path: 'auto-pay',
    loadComponent: () =>
      import('@ease-lite/card-auto-pay').then((m) => m.CardAutoPayComponent),
  },
  {
    path: 'pay-bill',
    loadComponent: () =>
      import('@ease-lite/card-pay-bill').then((m) => m.CardPayBillComponent),
  },
];
