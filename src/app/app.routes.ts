import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'transactions',
    loadChildren: () =>
      import('./modules/transactions/transactions.module').then(m => m.TransactionsModule),
  },
  {
    path: 'insights',
    loadChildren: () =>
      import('./modules/insights/insights.module').then(m => m.InsightsModule),
  },
];