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
  languagesTags = [
    'TypeScript',
    'JavaScript',
    'Java',
    'Python',
    'Kotlin',
    'PHP'
  ];

  frontendTags = [
    'Angular',
    'React',
    'Astro',
    'HTML',
    'CSS',
    'SCSS',
    'Tailwind CSS',
    'Bootstrap',
    'Angular Material',
    'Wix',
    'Websockets'
  ];

  backendTags = [
    'NestJS',
    'FastAPI',
    'Spring Boot',
    'Node.js',
    'Express',
    'JWT',
    'Bcrypt',
    'TypeORM',
    'Migraciones'
  ];

  databaseTags = ['PostgreSQL', 'MySQL', 'MongoDB'];

  toolsTags = [
    'Git',
    'GitHub',
    'Docker',
    'VS Code',
    'Figma',
    'Postman',
    'Swagger',
    'Scalar',
    'Chart.js',
    'NGX',
    'HeroUI',
    'Supabase'
  ];
}
