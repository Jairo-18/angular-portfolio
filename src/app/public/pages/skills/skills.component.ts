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
    'Angular SSR',
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
    'Módulos nativos (Kotlin / Swift)',
    'Notificaciones push',
    'Google Maps / Geolocalización',
    'Sign in with Apple / Google',
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
    'Migraciones',
    'Socket.IO',
    'Redis',
    'Cron Jobs',
    'Facturación electrónica DIAN (Factus)'
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
    'Nginx',
    'Firebase (FCM)',
    'Cloudinary',
    'Dokploy',
    'CI/CD',
    'VPS Linux',
    'Cloudflare (DNS y CDN)',
    'Google Cloud Platform',
    'Netlify',
    'Vercel'
  ];

  networkingTags = [
    'Instalación de switches',
    'Access Points',
    'Montaje de racks',
    'Organización de racks',
    'Cableado estructurado',
    'Puntos de datos',
    'Patch panels',
    'Mapeo de puertos',
    'Fibra óptica',
    'Servidores y workstations',
    'Windows Server',
    'Conexión con proveedores (ISP)',
    'Mantenimiento de equipos',
    'Soporte técnico'
  ];

  publishingTags = [
    'App Store Connect',
    'Google Play Console',
    'Huawei AppGallery',
    'TestFlight',
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
