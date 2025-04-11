import { Route } from '@angular/router';

export const bankRoutesRoutes: Route[] = [
  {
    path: 'savings-account',
    loadChildren: () =>
      import('@ease-lite/bank-savings-account').then(
        (m) => m.SavingsAccountComponent
      ),
  },
  {
    path: 'auto-pay',
    loadChildren: () =>
      import('@ease-lite/bank-auto-pay').then((m) => m.AutoPayComponent),
  },
  {
    path: 'checking-account',
    loadChildren: () =>
      import('@ease-lite/bank-checking-account').then(
        (m) => m.CheckingAccountComponent
      ),
  },
  {
    path: 'pay-bill',
    loadChildren: () =>
      import('@ease-lite/bank-pay-bill').then((m) => m.PayBillComponent),
  },
];
