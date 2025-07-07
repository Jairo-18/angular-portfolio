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
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./pages/projects/projects.component').then(
            (m) => m.ProjectsComponent
          )
      },
      {
        path: 'experience',
        loadComponent: () =>
          import('./pages/experience/experience.component').then(
            (m) => m.ExperienceComponent
          )
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact.component').then(
            (m) => m.ContactComponent
          )
      }
    ]
  }
];
