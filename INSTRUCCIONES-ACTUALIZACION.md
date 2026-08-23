# Instrucciones para actualizar el portafolio

> **Proyecto:** `angular-portfolio` (Angular 19.1.8 + Tailwind + Angular Material)
> **Ruta local:** `C:\Trabajo\angular-portfolio`
> **En vivo:** https://jhonlegardaportfolio.netlify.app
> **Auditoría realizada:** 2026-08-21 · Rama `main` limpia, último commit `d4baf58 "CV NEW"`
> **Fuente de datos:** `context.md` en `C:\Información\Personal\Archivos Personales\Documentos de identidad\CVS\`

---

## 0. Mapa: dónde vive cada cosa

| Qué quiero cambiar | Archivo |
|---|---|
| Tarjetas de proyectos (datos) | `src/app/public/constants/projects.constants.ts` |
| Tarjetas de proyectos (diseño) | `src/app/public/pages/projects/projects.component.html` |
| Listas de habilidades | `src/app/public/pages/skills/skills.component.ts` |
| Texto del inicio / redes sociales | `src/app/public/pages/home/home.component.html` |
| Texto que se "escribe solo" en el inicio | `src/app/public/pages/home/home.component.ts` |
| Educación y certificados | `src/app/public/constants/education.constants.ts` |
| Menú de navegación | `src/app/layout/components/nav-bar/nav-bar.component.html` |
| Rutas | `src/app/public/public.routes.ts` |
| Imágenes | `src/assets/images/` (usar `.webp`, ~70–90 KB) |

---

## 1. 🔴 PRIORIDAD ALTA — Cosas rotas o que restan

### 1.1 El botón "Ver Demo" de REMAKE está roto

**Verificado el 2026-08-21:** `https://www.remake-dt.com/` **no resuelve DNS**. El dominio ya no existe (el cliente no continuó el proyecto). Hoy, quien haga clic en "Ver Demo" de REMAKE cae en un error de navegador.

Los otros 6 demos responden correctamente (200 OK).

**Arreglo — elegir una opción:**
- **(a) Recomendada:** quitar el botón cuando no haya demo. Hacer `demoUrl` opcional en la interfaz y envolver el botón en un `*ngIf`.
- **(b) Rápida:** sacar REMAKE del array `PROJECTS`.
- **(c)** Reemplazar el enlace por el repositorio de GitHub, si el código es mostrable.

Para la opción (a), en `projects.constants.ts`:
```ts
export interface ProjectInterface {
  image: string;
  title: string;
  description: string;
  demoUrl?: string;        // <- ahora opcional
  repoUrl?: string;        // <- opcional, por si se quiere enlazar el código
  technologies: string[];
  role: string;
  features: string[];
  achievements?: string[];
}
```
Y en `projects.component.html`, cambiar el bloque del botón por:
```html
<div class="mt-auto w-full" *ngIf="project.demoUrl">
```

---

### 1.2 La ruta `/experience` muestra texto de prueba

`src/app/public/pages/experience/experience.component.html` contiene literalmente:

```html
@for (item of items; track $index) {
<div class="flex flex-col">
  <p>Probando layout {{ $index + 1 }}</p>
</div>
}
```

Esa ruta **está registrada** en `public.routes.ts` pero **no aparece en el menú**. O sea: es una página huérfana, accesible escribiendo la URL a mano, que muestra "Probando layout 1, 2, 3…". Google puede indexarla.

**Arreglo — elegir:**
- **(a) Rápida y segura:** borrar la ruta `experience` de `public.routes.ts` y eliminar la carpeta `pages/experience/`.
- **(b) Mejor a futuro:** construir la página de verdad (hay material de sobra en `context.md` §14.A) y agregarla al menú en `nav-bar.component.html`, tanto en la sección de escritorio como en el `mat-menu` de móvil.

---

### 1.3 Falta Mandalo — el proyecto más importante

No existe en el portafolio. Ver §2 para el código listo.

---

### 1.4 Verificar dos tecnologías declaradas

En `skills.component.ts`, `databaseTags` incluye **`Cassandra`** y **`Grafos (Neo4j)`**. No aparecen en ningún CV, ni en los 43 repos de GitHub, ni en el historial de Mandalo.

**Si no se sostienen en una entrevista, quitarlas.** Un entrevistador que pregunte por Cassandra y no reciba respuesta pone en duda toda la lista. Si vienen de una materia de la universidad, es mejor moverlas a Educación como asignatura vista.

---

## 2. Mandalo — código listo para pegar

**Antes hace falta la imagen:** crear `src/assets/images/MANDALO.webp` (una captura de la app o de somosmandalo.com; las demás pesan 70–90 KB y se muestran recortadas a `h-48 object-cover`).

Agregar en `projects.constants.ts`:

```ts
export const MANDALO_PROJECT: ProjectInterface = {
  image: 'assets/images/MANDALO.webp',
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
```

Y **ponerlo de primero** en el array (es el más fuerte y la grilla lo muestra arriba a la izquierda):

```ts
export const PROJECTS: ProjectInterface[] = [
  MANDALO_PROJECT,
  SAMAWE_PROJECT,
  LACASADELPINTOR_PROJECT,
  CINECLUB_PROJECT,
  IPUC_PROJECT,
  PROJECTZEN_PROJECT
];
```
*(REMAKE queda fuera o con el botón condicionado, según lo decidido en §1.1.)*

> ⚠️ **Confirmar con el cliente de Mandalo** que autoriza mostrar el proyecto y enlazar el dominio antes de publicar.

---

## 3. ⚠️ Detalle importante del diseño de las tarjetas

En `projects.component.html`, las líneas 58 y 69 recortan las listas:

```html
*ngFor="let feature of project.features.slice(0, 3)"       <!-- solo 3 -->
*ngFor="let achievement of project.achievements.slice(0, 2)" <!-- solo 2 -->
```

**Consecuencia:** las 11 características escritas en `SAMAWE_PROJECT` son invisibles salvo las 3 primeras. **Al editar, poner siempre lo más fuerte al inicio del array.** Escribir más no aporta nada visualmente (aunque sirve como respaldo si en el futuro se hace una vista de detalle).

---

## 4. Samawé — actualizar

Dos datos nuevos que el CV ya corrigió y aquí faltan:

1. **También fue aplicación de escritorio.** El sistema pasó por web → escritorio (Electron) → web. Hoy el título dice "Sistema Web Completo", lo que deja fuera esa capacidad.
2. **Falta la fase más reciente:** pasarela de pagos para reservas en línea integrada con **Booking y Airbnb**, y arquitectura **multitenant**.

Cambios sugeridos:

```ts
title: 'Samawé Eco Hotel – Sistema Web, Escritorio y Reservas',
```

Agregar a `technologies`: `'Electron'`, `'Multitenant'`, `'Pasarela de pagos'`.

Reordenar `features` para que las 3 primeras sean las que se ven:
```ts
features: [
  'Sistema contable con facturación electrónica integrada',
  'Versión de escritorio con Electron para operar sin conexión',
  'Pasarela de pagos integrada con Booking y Airbnb',
  'Landing multitenant con internacionalización (i18n)',
  'Panel administrativo con dashboard interactivo',
  'Comunicación en tiempo real con WebSockets',
  'Gestión contable completa con reportes',
  'Autenticación y autorización con JWT',
  'Carga y gestión de imágenes al servidor',
  'Servicio de correo SMTP automatizado',
  'Documentación API con Swagger',
  'Tareas programadas con Cron Jobs'
],
```

---

## 5. Habilidades — reemplazo completo

El listado actual no menciona móvil ni infraestructura, que hoy son la mitad del perfil. Además tiene cosas mal clasificadas: `Websockets` está en frontend, `Wix` en frontend, `Docker` y `Supabase` en herramientas.

Reemplazar el cuerpo de la clase en `skills.component.ts`:

```ts
export class SkillsComponent {
  languagesTags = [
    'TypeScript', 'JavaScript', 'Java', 'Python', 'Kotlin', 'PHP', 'SQL'
  ];

  frontendTags = [
    'Angular', 'React', 'Astro', 'HTML', 'CSS', 'SCSS',
    'Tailwind CSS', 'Bootstrap', 'Angular Material', 'HeroUI'
  ];

  mobileTags = [
    'React Native', 'Expo', 'expo-router', 'NativeWind', 'EAS Build', 'Electron'
  ];

  backendTags = [
    'NestJS', 'Node.js', 'Express', 'Spring Boot', 'FastAPI',
    'APIs REST', 'WebSockets', 'JWT', 'OAuth 2.0', 'Bcrypt',
    'TypeORM', 'Migraciones'
  ];

  databaseTags = [
    'PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Redis', 'Supabase'
  ];

  infraTags = [
    'Docker', 'Dokploy', 'CI/CD', 'VPS Linux', 'Nginx',
    'Cloudflare (DNS y CDN)', 'Google Cloud Platform', 'Firebase',
    'Netlify', 'Vercel'
  ];

  publishingTags = [
    'Google Play Console', 'Google Search Console', 'Google Maps API', 'Google OAuth'
  ];

  toolsTags = [
    'Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Swagger',
    'Scalar', 'Chart.js', 'NGX', 'Notion', 'Power BI'
  ];
}
```

> **Ojo:** hay que agregar en `skills.component.html` los bloques nuevos (`mobileTags`, `infraTags`, `publishingTags`) copiando el patrón de los que ya existen. Si no, esas listas quedan definidas pero no se muestran.

---

## 6. Inicio — actualizar el texto

En `home.component.html`, líneas 41–49, el texto se quedó en "aplicaciones web":

**Reemplazar el primer párrafo por:**
```html
<p class="animate-fade-in-up delay-4 text-sm md:text-base leading-relaxed text-gray-400 max-w-xl">
  Más de <strong class="text-white">2 años</strong> creando aplicaciones
  <strong class="text-white">web y móviles</strong>, especializado en
  <strong class="text-white">Angular, React Native y NestJS</strong>.
  Llevo los productos de principio a fin: diseño, desarrollo, despliegue
  e infraestructura.
</p>
```

**Y el segundo por:**
```html
<p class="animate-fade-in-up delay-5 text-sm md:text-base leading-relaxed text-gray-400 max-w-xl">
  Actualmente desarrollo en solitario una app de domicilios publicada en
  <strong class="text-white">Google Play</strong>, y administro su
  infraestructura con Docker, CI/CD y VPS.
</p>
```

**En `home.component.ts`, línea 15**, el texto que se escribe solo:
```ts
private readonly fullText = 'Desarrollador Full Stack Web & Móvil';
```

---

## 7. Educación — ajustes menores

`education.constants.ts` está en buen estado. Dos detalles:

- **Fechas de POLINTEC:** aquí dice `2018–2021`, el CV dice `Ene 2017 – Dic 2021`. **Están en conflicto — verificar cuál es la correcta y unificar.**
- **Bachiller 2010–2021:** en el portafolio puede quedarse (aquí el espacio no cuesta y aporta contexto). En el CV se quitó a propósito por espacio. No es inconsistencia, es criterio distinto por formato.

---

## 8. Sugerencia opcional: sección de Experiencia

Si se decide construir `/experience` en vez de borrarla (§1.2), el contenido ya está escrito y listo en `context.md` §14.A, incluyendo la entrada de **Técnico en Redes y Soporte TI** que hoy no aparece por ningún lado en el portafolio y que suma versatilidad.

---

## 9. Orden de ejecución sugerido

1. Crear `MANDALO.webp` en `src/assets/images/`.
2. Agregar `MANDALO_PROJECT` y reordenar el array `PROJECTS` (§2).
3. Arreglar el demo roto de REMAKE (§1.1). ← *es lo que más resta hoy*
4. Eliminar o construir `/experience` (§1.2).
5. Actualizar Samawé (§4).
6. Reemplazar habilidades, en el `.ts` **y** en el `.html` (§5).
7. Actualizar los textos del inicio (§6).
8. Decidir sobre Cassandra/Neo4j (§1.4) y las fechas de POLINTEC (§7).

## 10. Verificación antes de publicar

```powershell
cd C:\Trabajo\angular-portfolio
npm install
npm run build          # debe compilar sin errores
npm start              # revisar en http://localhost:4200
```

Revisar a mano:
- [ ] La tarjeta de Mandalo se ve bien y la imagen no queda deformada.
- [ ] **Todos** los botones "Ver Demo" abren un sitio vivo.
- [ ] `/experience` ya no muestra "Probando layout".
- [ ] Las categorías nuevas de habilidades se ven en pantalla, no solo en el código.
- [ ] Se ve bien en móvil (el menú es un `mat-menu` aparte del de escritorio).
- [ ] Ningún dato contradice el CV (`context.md` es la fuente de verdad).

Netlify despliega solo al hacer push a `main`.
