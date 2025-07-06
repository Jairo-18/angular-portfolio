import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout/default-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./public/public.routes').then((m) => m.publicRoutes),
      },
    ],
  },

  {
    path: '**',
    redirectTo: '/home',
  },
];
