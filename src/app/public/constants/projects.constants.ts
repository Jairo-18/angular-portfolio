export interface ProjectInterface {
  image: string;
  title: string;
  description: string;
  demoUrl: string;
  technologies: string[];
  role: string;
  features: string[];
  achievements?: string[];
}

export const PROJECTZEN_PROJECT: ProjectInterface = {
  image: 'assets/images/PROJECTZEN.png',
  title: 'ProjectZen - Gestor de Tareas y Proyectos',
  description:
    'Aplicación frontend para gestión de tareas y proyectos con interfaz intuitiva. Como trainee, me enfoqué en el desarrollo de componentes, consumo de APIs y la implementación de mejores prácticas de desarrollo frontend.',
  demoUrl: 'https://project-zen.netlify.app/home',
  technologies: [
    'Angular',
    'TypeScript',
    'Bootstrap',
    'RxJS',
    'Angular Services',
    'Interfaces'
  ],
  role: 'Desarrollador Frontend Trainee',
  features: [
    'Gestión de tareas con estados dinámicos',
    'Interfaz de usuario responsive',
    'Consumo de APIs REST',
    'Implementación de interfaces TypeScript',
    'Componentes reutilizables',
    'Manejo de formularios reactivos'
  ],
  achievements: [
    'Primer proyecto profesional completado',
    'Aprendizaje de patrones de desarrollo Angular'
  ]
};

export const REMAKE_PROJECT: ProjectInterface = {
  image: 'assets/images/REMAKE.png',
  title: 'REMAKE - Plataforma de Apuestas Dota 2',
  description:
    'Plataforma de apuestas en tiempo real para el ecosistema de Dota 2. Participé en el levantamiento inicial del proyecto desarrollando el frontend con Angular y TailwindCSS, implementando la arquitectura de componentes y consumo de APIs externas como OpenDota para datos en tiempo real.',
  demoUrl: 'https://www.remake-dt.com/#/home',
  technologies: [
    'Angular',
    'TypeScript',
    'TailwindCSS',
    'OpenDota API',
    'RxJS',
    'ESLint',
    'Prettier'
  ],
  role: 'Desarrollador Frontend',
  features: [
    'Integración con OpenDota API para estadísticas en tiempo real',
    'Sistema de apuestas interactivo',
    'Arquitectura de componentes escalable',
    'Interfaz responsive y optimizada para gaming',
    'Manejo de estados reactivos con RxJS'
  ],
  achievements: [
    '70% de avance del proyecto completado',
    'Implementación exitosa de APIs externas'
  ]
};

export const IPUC_PROJECT: ProjectInterface = {
  image: 'assets/images/IPUC.png',
  title: 'IPUC – Iglesia Pentecostal Unida de Colombia Sede 4ta Mocoa',
  description:
    'Landing page institucional full-stack con foro de comunidad integrado. Desarrollé una solución completa que incluye gestión de contenido, sistema de usuarios y plataforma de comunicación para la comunidad religiosa.',
  demoUrl: 'https://ipuc-cuarta-test.netlify.app/home',
  technologies: [
    'Angular',
    'NestJS',
    'PostgreSQL',
    'TypeORM',
    'TailwindCSS',
    'JWT',
    'Swagger',
    'Nodemailer'
  ],
  role: 'Desarrollador Full Stack',
  features: [
    'Landing page institucional responsive',
    'Foro de comunidad con sistema de posts',
    'Gestión de usuarios y perfiles',
    'Panel administrativo para contenido',
    'Sistema de notificaciones por email',
    'API REST documentada con Swagger',
    'Arquitectura modular con repositorios'
  ],
  achievements: [
    'Implementación exitosa de foro comunitario',
    'Diseño responsive optimizado para móviles'
  ]
};

export const SAMAWE_PROJECT: ProjectInterface = {
  image: 'assets/images/SAMAWE.png',
  title: 'Sistema Contable y Administrativo Samawé Eco Hotel',
  description:
    'Sistema full-stack completo para la gestión contable y administrativa de un eco hotel. Desarrollé desde el levantamiento de requerimientos hasta el despliegue en producción, incluyendo diseño UX/UI, arquitectura backend robusta y frontend interactivo.',
  demoUrl: 'https://samawe.netlify.app/home',
  technologies: [
    'Angular',
    'NestJS',
    'PostgreSQL',
    'TypeORM',
    'JWT',
    'Bcrypt',
    'TailwindCSS',
    'Figma',
    'Swagger',
    'Nodemailer',
    'Cron Jobs'
  ],
  role: 'Desarrollador Full Stack',
  features: [
    'Sistema de autenticación y autorización con JWT',
    'Gestión contable completa con reportes',
    'Panel administrativo con dashboard interactivo',
    'Servicio de correo SMTP automatizado',
    'Arquitectura basada en DTOs y entidades',
    'Documentación API con Swagger',
    'Tareas programadas con Cron Jobs',
    'Configuración de entornos dev/prod'
  ],
  achievements: [
    'Levantamiento completo de requerimientos',
    'Diseño UX/UI desde cero en Figma',
    'Arquitectura escalable y mantenible',
    'Despliegue exitoso en producción'
  ]
};

export const PROJECTS: ProjectInterface[] = [
  PROJECTZEN_PROJECT,
  REMAKE_PROJECT,
  IPUC_PROJECT,
  SAMAWE_PROJECT
];
