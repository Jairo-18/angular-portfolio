export interface ProjectInterface {
  image: string;
  title: string;
  description: string;
  /** Opcional: hay proyectos sin demo pública (cliente que no continuó, dominio caído). */
  demoUrl?: string;
  technologies: string[];
  role: string;
  features: string[];
  achievements?: string[];
}

export const MANDALO_PROJECT: ProjectInterface = {
  image: 'assets/images/MANDALO.png',
  title: 'Mandalo – Marketplace de Domicilios (App Móvil)',
  description:
    'Marketplace de domicilios para el departamento del Putumayo, desarrollado end-to-end en solitario: aplicación móvil Android/iOS publicada en Google Play, versión web e infraestructura completa. Incluye arquitectura multi-tenant por municipio, motor de tarifas dinámico, seguimiento en tiempo real y liquidaciones automatizadas.',
  demoUrl: 'https://somosmandalo.com/home',
  technologies: [
    'React Native',
    'Expo',
    'NestJS',
    'PostgreSQL',
    'TypeORM',
    'Redis',
    'WebSockets',
    'Docker',
    'Dokploy',
    'Cloudflare',
    'Firebase FCM',
    'Google Play Console',
    'Google Maps API',
    'NativeWind'
  ],
  role: 'Desarrollador Full Stack Móvil',
  features: [
    'App móvil publicada en Google Play (Android/iOS + web)',
    'Arquitectura multi-tenant con 5 roles y permisos por municipio',
    'Motor de tarifas por distancia con recargos por horario, clima y demanda',
    'Chat en tiempo real y seguimiento del repartidor en segundo plano',
    'Notificaciones push con Firebase FCM',
    'Liquidaciones quincenales automatizadas en dos direcciones',
    'Infraestructura propia: Docker, CI/CD, DNS y respaldos automáticos'
  ],
  achievements: [
    'Aplicación publicada en Google Play',
    '80 usuarios concurrentes sin errores en pruebas de carga',
    'Proyecto en producción: somosmandalo.com'
  ]
};

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
  // Sin demo: el cliente no continuó el proyecto y el dominio remake-dt.com ya no resuelve.
  demoUrl: undefined,
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
  title: 'Samawé Eco Hotel – Sistema Web, Escritorio y Reservas',
  description:
    'Sistema full-stack completo para el Eco Hotel Samawé, desde el levantamiento de requerimientos hasta el despliegue en producción. Más de un año como desarrollador de confianza del cliente, en tres fases: sistema contable (entregado también como aplicación de escritorio con Electron), módulo de restaurante y landing pública multitenant con pasarela de pagos para reservas en línea.',
  demoUrl: 'https://ecohotelsamawe.com/es',
  technologies: [
    'Angular',
    'NestJS',
    'PostgreSQL',
    'TypeORM',
    'Electron',
    'JWT',
    'Bcrypt',
    'TailwindCSS',
    'Figma',
    'Swagger',
    'Nodemailer',
    'WebSockets',
    'Multer',
    'i18n',
    'Multitenant',
    'Pasarela de pagos',
    'Cron Jobs'
  ],
  role: 'Desarrollador Full Stack',
  features: [
    'Sistema contable con facturación electrónica integrada',
    'Versión de escritorio con Electron para operar sin conexión',
    'Pasarela de pagos integrada con Booking y Airbnb',
    'Landing multitenant con internacionalización (i18n) de punta a punta',
    'Módulo de restaurante: menú, pedidos, mesas y facturación',
    'Panel administrativo con dashboard interactivo',
    'Comunicación en tiempo real con WebSockets',
    'Gestión contable completa con reportes y exportación',
    'Autenticación y autorización con JWT',
    'Carga y gestión de imágenes al servidor',
    'Documentación API con Swagger',
    'Tareas programadas con Cron Jobs'
  ],
  achievements: [
    'Proyecto en producción: ecohotelsamawe.com',
    'Vendí e implementé la solución al cliente final',
    'Más de un año de relación continua con el cliente',
    'Eliminó por completo el uso de hojas de cálculo manuales'
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

/** Orden intencional: los proyectos más fuertes y en producción van primero. */
export const PROJECTS: ProjectInterface[] = [
  MANDALO_PROJECT,
  SAMAWE_PROJECT,
  LACASADELPINTOR_PROJECT,
  CINECLUB_PROJECT,
  IPUC_PROJECT,
  REMAKE_PROJECT,
  PROJECTZEN_PROJECT
];
