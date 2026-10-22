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
    'Marketplace de domicilios para el departamento del Putumayo, desarrollado end-to-end en solitario: aplicación móvil publicada en App Store, Google Play y Huawei AppGallery, versión web e infraestructura completa. Incluye arquitectura multi-tenant por municipio, motor de tarifas dinámico, seguimiento en tiempo real y liquidaciones automatizadas.',
  demoUrl: 'https://somosmandalo.com/home',
  technologies: [
    'React Native',
    'Expo',
    'Expo Router',
    'NativeWind',
    'NestJS',
    'PostgreSQL',
    'TypeORM',
    'Redis',
    'WebSockets',
    'Kotlin',
    'Swift',
    'Docker',
    'Dokploy',
    'Cloudflare',
    'Firebase FCM',
    'EAS Build',
    'App Store Connect',
    'Google Play Console',
    'Huawei AppGallery',
    'Google Maps API',
    'Sign in with Apple',
    'Google Sign-In',
    'Open-Meteo'
  ],
  role: 'Desarrollador Full Stack Móvil',
  features: [
    'Publicada en App Store, Google Play y Huawei AppGallery, más versión web, desde un solo código',
    'Arquitectura multi-tenant con 5 roles y permisos por municipio',
    'Motor de tarifas por distancia con recargos nocturno, por lluvia (Open-Meteo) y por demanda',
    'Chat en tiempo real y seguimiento del repartidor en segundo plano',
    'Notificaciones push (FCM y APNs) con módulo nativo propio en Kotlin y Swift',
    'Inicio de sesión con Google y Sign in with Apple',
    'Flujo de entrega fallida: tiempo de espera, foto de evidencia, cancelación automática y cobro del reintento',
    'Liquidaciones quincenales automatizadas en dos direcciones (negocios y repartidores)',
    'Actualizaciones in-app en Android y builds con EAS',
    'Infraestructura propia: Docker, CI/CD, DNS y respaldos automáticos'
  ],
  achievements: [
    'Aprobada y publicada en App Store, Google Play y Huawei AppGallery',
    '80 usuarios concurrentes sin errores en pruebas de carga',
    'Superé la revisión de Apple: cuentas demo, Sign in with Apple y borrado de cuenta',
    'Validada en demos en vivo con negocios reales',
    'Proyecto en producción: somosmandalo.com'
  ]
};

export const RANCHOPORVENIR_PROJECT: ProjectInterface = {
  image: 'assets/images/RANCHOPORVENIR.webp',
  title: 'Rancho Porvenir – Sitio Web y Panel para Hotel Ecológico',
  description:
    'Sitio web y panel administrativo para un hotel ecológico en el piedemonte amazónico de Mocoa. El visitante arma su plan (cabaña, cabalgatas y productos), ve el total estimado con precios dinámicos por noche y lo envía al WhatsApp del negocio con un mensaje prellenado. El dueño gestiona todo el contenido desde un panel usable en el celular.',
  demoUrl: 'https://ranchoporvenirmocoa.com',
  technologies: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'NestJS',
    'PostgreSQL',
    'TypeORM',
    'JWT',
    'Zod',
    'Sharp',
    'Swagger',
    'Vitest',
    'Docker',
    'Dokploy',
    'Cloudflare'
  ],
  role: 'Desarrollador Full Stack',
  features: [
    'Motor de precios por noche: entre semana, fin de semana y reglas especiales para festivos y temporadas',
    'Flujo «Mi solicitud» que arma el plan y lo envía a WhatsApp con el mensaje prellenado',
    'Panel administrativo usable desde el celular con editor de fotos antes de subir',
    'Calculadora con selector de fechas propio y desglose noche por noche',
    'Festivos de Colombia calculados con la Ley Emiliani',
    'Sesión del panel en cookies httpOnly con refresh token rotativo',
    'Logo, ajustes e información para el huésped editables sin tocar código',
    'Cambios del panel visibles al instante en el sitio (revalidación de caché)',
    'SEO con Server Components, metadata y Open Graph por página'
  ],
  achievements: [
    'Proyecto en producción con dominio propio: ranchoporvenirmocoa.com',
    'Tests unitarios del servicio de precios y del generador del mensaje de WhatsApp',
    'Optimización automática de imágenes a WebP con Sharp'
  ]
};

export const CRAZYLOVE_PROJECT: ProjectInterface = {
  image: 'assets/images/CRAZYLOVE.webp',
  title: 'Motel Crazy Love – Carta Digital y Catálogo (Multi-hotel)',
  description:
    'Sitio público del Motel Crazy Love en Mocoa, construido sobre la plataforma multi-hotel de Samawé: el mismo backend y el mismo panel administrativo atienden a los dos negocios como organizaciones separadas. El huésped escanea el QR de la habitación y ve habitaciones con tarifas por horas, servicios y la carta completa; el dueño gestiona todo desde el panel con la marca de su hotel.',
  demoUrl: 'https://crazylove.ecohotelsamawe.com',
  technologies: [
    'Next.js 16',
    'React',
    'TypeScript',
    'Tailwind CSS 4',
    'NestJS',
    'PostgreSQL',
    'TypeORM',
    'Multitenant',
    'Angular',
    'Docker',
    'Dokploy',
    'Cloudflare'
  ],
  role: 'Desarrollador Full Stack',
  features: [
    'Segundo hotel sobre el backend multitenant de Samawé: el dominio de cada petición decide la organización',
    'Carta digital de un solo scroll para el QR de las habitaciones, con buscador y barra de secciones',
    'Habitaciones con tarifas por horas: "¿Cuánto tiempo te quedas?" reordena por precio y marca la más económica',
    'Panel compartido con Samawé: login por hotel, marca y colores de cada organización',
    'Fichas de producto en hoja deslizable con enlace compartible y botón "atrás" que la cierra',
    'Galería con visor a pantalla completa y carrusel con scroll-snap, sin librerías',
    'Modo claro/oscuro según el celular con los colores del hotel',
    'Caché de datos con Next 16 (use cache): los cambios del panel se ven en un minuto'
  ],
  achievements: [
    'En producción: crazylove.ecohotelsamawe.com',
    'Datos de cada hotel aislados: registros de otra organización responden 404',
    'Nuevo cliente sin duplicar backend, base de datos ni panel'
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
  title: 'Samawé Eco Hotel – Plataforma Multi-hotel, Facturación DIAN y Reservas',
  description:
    'Sistema full-stack completo para el Eco Hotel Samawé, desde el levantamiento de requerimientos hasta el despliegue en producción. Más de un año como desarrollador de confianza del cliente: sistema contable con facturación electrónica ante la DIAN (entregado también como aplicación de escritorio con Electron), restaurante e inventario, landing pública con SSR y reservas en línea. En octubre de 2026 lo convertí en una plataforma multi-hotel (multitenant): el mismo backend y el mismo panel atienden también al Motel Crazy Love, cada hotel como una organización separada con sus datos aislados, su dominio y su marca.',
  demoUrl: 'https://ecohotelsamawe.com/es',
  technologies: [
    'Angular',
    'Angular SSR',
    'NestJS',
    'PostgreSQL',
    'TypeORM',
    'Factus API (DIAN)',
    'Electron',
    'Redis',
    'WebSockets',
    'JWT',
    'Google OAuth',
    'Bcrypt',
    'TailwindCSS',
    'Angular Material',
    'Cloudinary',
    'pdfmake',
    'ExcelJS',
    'Figma',
    'Swagger',
    'Nodemailer',
    'i18n',
    'Multitenant',
    'Cron Jobs',
    'Docker'
  ],
  role: 'Desarrollador Full Stack',
  features: [
    'Facturación electrónica DIAN con Factus: factura de venta, notas crédito y débito, documento soporte y nota de ajuste',
    'Multitenant en producción: sirve a Samawé y a Crazy Love como organizaciones separadas, resueltas por dominio',
    'Reservas en línea: disponibilidad, confirmación de pago por el personal y liberación automática a las 24 h',
    'Aislamiento entre hoteles: 84 rutas protegidas por propiedad, inserciones con hotel obligatorio y panel con la marca de cada organización',
    'Versión de escritorio con Electron para operar sin conexión',
    'Módulo de restaurante: menús, recetas, pedidos e inventario con reversión automática',
    'Ventas a crédito con plazos de 30, 60 y 90 días y registro de abonos',
    'Landing con SSR, SEO técnico, i18n (español/inglés) y modo oscuro',
    'Avisos en tiempo real con WebSockets y correos automáticos al huésped',
    'Panel administrativo con dashboard de ganancias y reportes en PDF y Excel',
    'Escalado horizontal con Redis: adaptador de Socket.IO y límite de peticiones compartido',
    'Autenticación con JWT y Google OAuth, con roles',
    'Carga y optimización de imágenes con Cloudinary y Sharp',
    'Documentación API con Swagger y tareas programadas con Cron Jobs'
  ],
  achievements: [
    'Proyecto en producción: ecohotelsamawe.com',
    'Facturación electrónica DIAN emitiendo en producción con Factus',
    'Plataforma multi-hotel: un segundo hotel (Crazy Love) operando sobre el mismo sistema',
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
  CRAZYLOVE_PROJECT,
  RANCHOPORVENIR_PROJECT,
  LACASADELPINTOR_PROJECT,
  CINECLUB_PROJECT,
  IPUC_PROJECT,
  REMAKE_PROJECT,
  PROJECTZEN_PROJECT
];
