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

export const CINECLUB_PROJECT: ProjectInterface = {
  image: 'assets/images/CINECLUB.webp',
  title: 'Cineclub+ - Blog y Comunidad de Cine',
  description:
    'Plataforma social tipo blog diseñada para crear una comunidad de cine. Lideré el desarrollo frontend diseñando una interfaz interactiva y moderna, integrando funcionalidades de comunidad avanzadas y gestión de contenido en tiempo real.',
  demoUrl: 'https://cineclub-front-dev.vercel.app/home',
  technologies: [
    'Angular',
    'Tailwind CSS',
    'WebSockets',
    'Spring Boot',
    'PostgreSQL',
    'OAuth 2.0',
    'JWT'
  ],
  role: 'Desarrollador Frontend',
  features: [
    'Sistema de recomendaciones y reacciones',
    'Hilos de comentarios y comunidad',
    'Notificaciones en tiempo real con WebSockets',
    'Autenticación OAuth 2.0 y JWT',
    'Panel administrativo de moderación',
    'Módulo para compartir y solicitar películas'
  ],
  achievements: [
    'Diseño de interfaz interactiva y moderna',
    'Integración exitosa de WebSockets',
    'Gestión completa de comunidad'
  ]
};

export const PROJECTZEN_PROJECT: ProjectInterface = {
  image: 'assets/images/PROJECTZEN.webp',
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
  image: 'assets/images/REMAKE.webp',
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
  image: 'assets/images/IPUC.webp',
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
  image: 'assets/images/SAMAWE.webp',
  title: 'Samawé Eco Hotel – Sistema Web Completo',
  description:
    'Sistema full-stack completo para el Eco Hotel Samawé, desde el levantamiento de requerimientos hasta el despliegue en producción. Incluye landing page pública, sistema contable, facturación electrónica, panel administrativo, comunicación en tiempo real y soporte multiidioma.',
  demoUrl: 'https://ecohotelsamawe.com',
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
    'WebSockets',
    'Multer',
    'i18n',
    'Cron Jobs'
  ],
  role: 'Desarrollador Full Stack',
  features: [
    'Landing page pública del eco hotel',
    'Facturación electrónica integrada',
    'Cambio de idioma (internacionalización i18n)',
    'Comunicación en tiempo real con WebSockets',
    'Carga y gestión de imágenes al servidor',
    'Sistema de autenticación y autorización con JWT',
    'Gestión contable completa con reportes',
    'Panel administrativo con dashboard interactivo',
    'Servicio de correo SMTP automatizado',
    'Documentación API con Swagger',
    'Tareas programadas con Cron Jobs'
  ],
  achievements: [
    'Proyecto en producción: ecohotelsamawe.com',
    'Diseño UX/UI desde cero en Figma',
    'Arquitectura escalable con WebSockets y i18n',
    'Facturación electrónica completamente integrada'
  ]
};

export const LACASADELPINTOR_PROJECT: ProjectInterface = {
  image: 'assets/images/LACASADELPINTOR.webp',
  title: 'La Casa del Pintor Mocoa – Catálogo de Productos',
  description:
    'Plataforma web full-stack para la tienda La Casa del Pintor Mocoa. Desarrollé un catálogo de productos con panel administrativo completo que permite gestionar el inventario, publicar productos y administrar el contenido del sitio de forma autónoma.',
  demoUrl: 'https://lacasadelpintormocoa.com',
  technologies: [
    'Angular',
    'NestJS',
    'PostgreSQL',
    'TypeORM',
    'TailwindCSS',
    'JWT',
    'Multer',
    'Swagger'
  ],
  role: 'Desarrollador Full Stack',
  features: [
    'Catálogo de productos con filtros y búsqueda',
    'Panel administrativo para gestión de productos',
    'Carga y gestión de imágenes de productos',
    'Sistema de autenticación para administradores',
    'Gestión de categorías e inventario',
    'Interfaz responsive optimizada para móviles'
  ],
  achievements: [
    'Proyecto en producción: lacasadelpintormocoa.com',
    'Panel admin autónomo para el negocio',
    'Catálogo visual completo con imágenes'
  ]
};

export const PROJECTS: ProjectInterface[] = [
  CINECLUB_PROJECT,
  SAMAWE_PROJECT,
  LACASADELPINTOR_PROJECT,
  IPUC_PROJECT,
  REMAKE_PROJECT,
  PROJECTZEN_PROJECT
];
