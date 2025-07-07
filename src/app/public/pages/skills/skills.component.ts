import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  frontendTags = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'React',
    'Astro',
    'Tailwind CSS',
    'Bootstrap',
    'RxJS',
    'SCSS',
    'Material UI',
    'NgRx'
  ];

  backendTags = [
    'NodeJS',
    'NestJS',
    'Express',
    'PostgreSQL',
    'MySQL',
    'TypeORM',
    'JWT',
    'Bcrypt',
    'Swagger',
    'REST API',
    'MongoDB',
    'Migraciones'
  ];

  toolsTags = [
    'Git',
    'GitHub',
    'Figma',
    'Postman',
    'VSCode',
    'HeidiSQL',
    'Notion',
    'npm',
    'pnpm',
    'Vercel',
    'Netlify',
    'Prettier',
    'ESLint'
  ];
}
