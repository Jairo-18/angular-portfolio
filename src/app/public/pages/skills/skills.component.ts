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
    'PHP',
    'SQL'
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
    'HeroUI'
  ];

  mobileTags = [
    'React Native',
    'Expo',
    'expo-router',
    'NativeWind',
    'EAS Build',
    'Electron'
  ];

  backendTags = [
    'NestJS',
    'Node.js',
    'Express',
    'Spring Boot',
    'FastAPI',
    'APIs REST',
    'WebSockets',
    'JWT',
    'OAuth 2.0',
    'Bcrypt',
    'TypeORM',
    'Migraciones'
  ];

  databaseTags = [
    'PostgreSQL',
    'MySQL',
    'SQL Server',
    'MongoDB',
    'Redis',
    'Supabase'
  ];

  infraTags = [
    'Docker',
    'Dokploy',
    'CI/CD',
    'VPS Linux',
    'Nginx',
    'Cloudflare (DNS y CDN)',
    'Google Cloud Platform',
    'Firebase',
    'Netlify',
    'Vercel'
  ];

  publishingTags = [
    'Google Play Console',
    'Google Search Console',
    'Google Maps API',
    'Google OAuth'
  ];

  toolsTags = [
    'Git',
    'GitHub',
    'VS Code',
    'Figma',
    'Postman',
    'Swagger',
    'Scalar',
    'Chart.js',
    'NGX',
    'Notion',
    'Power BI'
  ];
}
