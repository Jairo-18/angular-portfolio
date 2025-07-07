import { Routes } from '@angular/router';

export const publicRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent)
      },
      {
        path: 'skills',
        loadComponent: () =>
          import('./pages/skills/skills.component').then(
            (m) => m.SkillsComponent
          )
      }
      // {
      //   path: 'register',
      //   loadComponent: () =>
      //     import('./pages/register/register.component').then(
      //       (m) => m.RegisterComponent
      //     )
      // }
    ]
  }
];
