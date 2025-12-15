export interface Education {
  id: number;
  title: string; // Título del programa/carrera
  institute: string; // Nombre del instituto/universidad
  description: string; // Descripción del programa
  image: string; // URL de la imagen del instituto
  startDate: string; // Fecha de inicio (ej: "2020")
  endDate: string; // Fecha de fin (ej: "2024" o "Presente")
  subjects?: string[]; // Materias o áreas de estudio principales
  achievements?: string[]; // Logros académicos
  certificateUrl?: string; // URL del certificado (opcional)
  instituteUrl?: string; // URL de la página de la institución (opcional)
  status?: 'Completado' | 'En progreso' | 'Pausado'; // Estado del programa
}

export const EDUCATIONS: Education[] = [
  {
    id: 7,
    title: 'Ingeniería de Sistemas',
    institute: 'Institución Universitaria del Putumayo',
    description:
      'Formación profesional en ingeniería de sistemas. Actualmente cursando el octavo semestre.',
    image: 'assets/images/ITP.png',
    startDate: '2025',
    endDate: 'Presente',
    subjects: [
      'Machine Learning',
      'Inteligencia Artificial',
      'Programación Avanzada',
      'Hilos y Concurrencia',
      'WebSockets',
      'Infraestructura',
      'Arquitectura de Software'
    ],
    achievements: [],
    certificateUrl: ' ',
    instituteUrl: 'https://itp.edu.co/ITP2022/',
    status: 'En progreso'
  },
  {
    id: 6,
    title: 'Tecnología en Desarrollo de Software',
    institute: 'Uniputumayo',
    description:
      'Programa tecnológico enfocado en desarrollo de software full-stack. Adquirí competencias en bases de datos relacionales, desarrollo frontend y backend, redes y sistemas operativos. Formación como desarrollador full-stack junior con énfasis en desarrollo de software.',
    image: 'assets/images/ITP.png',
    startDate: '2022',
    endDate: '2025',
    subjects: [
      'Bases de Datos Relacionales',
      'Frontend Development',
      'Backend Development',
      'Redes',
      'Sistemas Operativos',
      'Desarrollo Full-Stack',
      'Figma',
      'Notion',
      'Git',
      'Habilidades blandas'
    ],
    achievements: [
      'Página web como horas sociales',
      'Sistema contable como proyecto de grado',
      'Promedio 4,1',
      'Certificación Tecnológica'
    ],
    certificateUrl: ' ',
    instituteUrl: 'https://itp.edu.co/ITP2022/',
    status: 'Completado'
  },
  {
    id: 5,
    title: 'Programming Fundamentals in Kotlin',
    institute: 'Coursera - SENATIC META',
    description:
      'Certificación en fundamentos de programación con Kotlin. Aprendí los conceptos básicos de programación, sintaxis de Kotlin, manejo de variables, clases y estructuras de control.',
    image: 'assets/images/COURSERA.png',
    startDate: '2024',
    endDate: '2024',
    subjects: [
      'Kotlin',
      'Variables y Tipos de Datos',
      'Clases y Objetos',
      'Funciones',
      'Estructuras de Control'
    ],
    achievements: ['Certificación Meta - 40 horas'],
    certificateUrl: '../../../../assets/files/KOTLIN.pdf',
    instituteUrl: 'https://www.coursera.org/',
    status: 'Completado'
  },
  {
    id: 4,
    title: 'Aspectos básicos del diseño de la experiencia del usuario',
    institute: 'Coursera - Google',
    description:
      'Certificación de Google que cubre los principios fundamentales del diseño UX. Comprendí los aspectos básicos del diseño centrado en el usuario, usabilidad y principios de interfaz.',
    image: 'assets/images/COURSERA.png',
    startDate: '2023',
    endDate: '2023',
    subjects: [
      'Principios de Diseño UX',
      'Usabilidad',
      'Diseño de Interfaz',
      'Accesibilidad'
    ],
    achievements: ['Certificación Google - 20 horas'],
    certificateUrl: '../../../../assets/files/BASICOUSUARIO.pdf',
    instituteUrl: 'https://www.coursera.org/',
    status: 'Completado'
  },
  {
    id: 3,
    title:
      'Primeros pasos en el proceso de diseño de UX: Empatizar, definir e idear',
    institute: 'Coursera - Google',
    description:
      'Certificación de Google enfocada en los fundamentos del diseño de experiencia de usuario. Aprendí metodologías de diseño centrado en el usuario, procesos de investigación y técnicas de ideación.',
    image: 'assets/images/COURSERA.png',
    startDate: '2023',
    endDate: '2023',
    subjects: [
      'Diseño UX',
      'Metodologías de Investigación',
      'Empatía con Usuario',
      'Procesos de Ideación',
      'Prototipado'
    ],
    achievements: ['Certificación Google - 20 horas'],
    certificateUrl: '../../../../assets/files/PRIMEROSPASOS.pdf',
    instituteUrl: 'https://www.coursera.org/',
    status: 'Completado'
  },
  {
    id: 2,
    title: 'Técnico Laboral en Sistemas Informáticos',
    institute:
      'POLINTEC - Institución de Educación Técnica Politécnico Internacional Colombiano',
    description:
      'Formación técnica especializada en sistemas informáticos con énfasis en sistemas operativos, hardware, programación básica, y herramientas de diseño gráfico. Adquirí conocimientos fundamentales en tecnologías de la información.',
    image: 'assets/images/POLINTEC.png',
    startDate: '2018',
    endDate: '2021',
    subjects: [
      'Sistemas Operativos',
      'Hardware',
      'Programación Básica Java',
      'Adobe Photoshop',
      'CorelDRAW',
      'Editores de Video y fotos'
    ],
    achievements: ['Seminario en Java 100 hrs', 'Certificación Técnica'],
    certificateUrl: '../../../../assets/files/POLIINTECDIPLOMA.pdf',
    instituteUrl: 'https://polintec.edu.co/',
    status: 'Completado'
  },
  {
    id: 1,
    title: 'Bachiller Académico',
    institute: 'Institución Educativa PIO XII',
    description:
      'Formación integral en educación básica primaria, secundaria y bachillerato. Completé satisfactoriamente todos los niveles académicos con enfoque en desarrollo personal y académico.',
    image: 'assets/images/PIOXII.png',
    startDate: '2010',
    endDate: '2021',
    subjects: [
      'Matemáticas',
      'Ciencias Naturales',
      'Lenguaje',
      'Ética y Valores',
      'Inglés',
      'Ciencias Sociales',
      'Artística',
      'Educación Física',
      'Física'
    ],
    achievements: ['Certificación Académica (Bachiller)'],
    certificateUrl: '../../../../assets/files/BACHILLERDIPLOMA.pdf',
    instituteUrl: 'https://www.iepioxii.edu.co/web/',
    status: 'Completado'
  }
];
