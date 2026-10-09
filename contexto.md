# Contexto del proyecto angular-portfolio

> Documento de arranque para retomar el trabajo. Última actualización: **9 oct 2026**.

## Qué es

Portfolio personal de **Jairo (Jhon Legarda)**, desarrollador full stack de Mocoa, Putumayo (Colombia).
SPA en Angular sin backend: todo el contenido vive en constantes y plantillas.

## Stack y comandos

- Angular 20 (componentes standalone, rutas con `loadComponent`), Angular Material, Tailwind CSS 3, SCSS.
- Font Awesome, Chart.js / ng2-charts, ngx-toastr, EmailJS (formulario de contacto), html2pdf.js.
- Despliegue estático con fallback SPA (`public/_redirects` → `/* /index.html 200`, estilo Netlify).

| Acción | Comando |
|---|---|
| Dev | `npm start` → `http://localhost:4200` |
| Build | `npm run build` |
| Typecheck | `npx tsc --noEmit -p tsconfig.app.json` |
| Lint | `npm run lint` |

> En la raíz hay `pnpm-lock.yaml` y `pnpm-workspace.yaml` sin commitear junto a `package-lock.json`: conviene quedarse con un solo gestor.

## Estructura

```
src/app/
├── layout/            nav-bar, footer, default-layout
└── public/
    ├── constants/     projects.constants.ts · education.constants.ts   ← CONTENIDO
    ├── pages/         home · skills · projects · education · contact · experience
    └── public.routes.ts
src/assets/
├── images/            portadas de proyectos (.png original + .webp que usa la app)
├── files/             CV (ES/EN) y diplomas en PDF
└── styles/            variables, animaciones, tema de Material
```

Rutas públicas: `/home`, `/skills`, `/projects`, `/education`, `/contact`.
`experience` existe pero **no está enrutada** y su plantilla es un placeholder ("Probando layout").

## Cómo agregar o editar contenido

- **Proyectos**: `src/app/public/constants/projects.constants.ts`. Cada proyecto es un `ProjectInterface`
  (`image`, `title`, `description`, `demoUrl`, `technologies`, `role`, `features`, `achievements?`) y se
  ordena en el arreglo `PROJECTS`.
  - La tarjeta muestra **solo las 3 primeras `features` y los 2 primeros `achievements`**: lo más fuerte va arriba.
  - Imagen: guardar el `.png` y un `.webp` con el mismo nombre en `src/assets/images/`; la app usa el `.webp`.
- **Habilidades**: arreglos de etiquetas en `pages/skills/skills.component.ts`
  (`languagesTags`, `frontendTags`, `backendTags`, `databaseTags`, `toolsTags`).
- **Educación**: `education.constants.ts`; los PDFs en `src/assets/files/`.

## Proyectos destacados (fuente de la información)

El contenido de los dos proyectos principales sale de sus propias carpetas de documentación.
Al actualizarlos, revisar ahí primero:

### Mándalo — `C:\Trabajo\mandalo` (`contexto/NOTAS.md`)
- App de pedidos y domicilios para el Putumayo. Dominio: **somosmandalo.com**.
- **Publicada en App Store, Google Play y Huawei AppGallery** (aprobada en las tres; iOS en 1.0.2, Android 1.0.1 a oct 2026).
- Frontend: Expo SDK 57 + expo-router + NativeWind (React Native, también compilado a web con Docker + Nginx).
  Módulos nativos propios (`modules/notify-sound`, Kotlin + Swift).
- Backend: NestJS 11 + TypeORM + PostgreSQL, Socket.IO, Redis (caché), push con `expo-server-sdk` (FCM/APNs),
  login con Google y Apple, cron jobs, backups.
- Roles: cliente, negocio, domiciliario, administrador (SUPERADMIN). Chat en tiempo real, liquidaciones de
  negocios y domiciliarios, tarifa de servicio por tramos, precios de domicilio por municipio, mapas y geolocalización.
- Iniciado el 2026-07-01.

### Samawé Eco Hotel — `C:\Trabajo\samawe` (`contexto/contexto.md`, `factus/README.md`)
- Sistema de gestión del Eco Hotel Samawé (Putumayo): hospedaje, restaurante, excursiones, productos,
  inventario, facturación y sitio público. Dominio: **ecohotelsamawe.com** (API: `api.ecohotelsamawe.com`).
- Frontend: Angular 19 + SSR + Material + Tailwind, i18n español/inglés (`@ngx-translate`), modo oscuro.
- Backend: NestJS 11 + TypeORM + PostgreSQL en Docker; Redis (adaptador Socket.IO, throttling), Cloudinary,
  pdfmake, exceljs, QR, Google OAuth, correos SMTP, cron jobs.
- **Facturación electrónica DIAN vía Factus API v2**: factura de venta, nota crédito, nota débito,
  documento soporte y nota de ajuste.
- Reservas en línea del huésped (oct 2026) con confirmación de pago y vencimiento automático a 24 h.
- SEO técnico con SSR (sección 9-bis y 18 del contexto de samawe).

> ⚠️ **No copiar al portfolio** credenciales, IPs, puertos de BD, cuentas demo ni datos de clientes
> que aparecen en esas carpetas (p. ej. `CREDENCIALES_*.txt`, `APP_REVIEW_INFO.md`). Solo lo público:
> dominios, stack y funcionalidades.

## Historial de cambios de este documento

### 9 oct 2026
- Nuevo proyecto **Mándalo** (`MANDALO_PROJECT`), primero en la lista. Imagen `MANDALO.png` / `.webp`
  generada desde `mandalo/Images/mandalo-feature-graphic-1024x500.png`.
- **Samawé** reescrito con el alcance real: los cinco documentos DIAN, reservas en línea, SSR/SEO,
  Redis, restaurante e inventario.
- Orden de `PROJECTS`: Mándalo, Samawé, Cineclub+, La Casa del Pintor, IPUC, REMAKE, ProjectZen.
- Habilidades nuevas: Angular SSR, React Native, Expo, NativeWind, Socket.IO, Redis, Cron Jobs,
  Facturación electrónica DIAN, Nginx, EAS Build, App Store Connect, Google Play Console, Firebase (FCM), Cloudinary.
- `tsc` pasa. Nada commiteado ni desplegado.

### 9 oct 2026 (tarde)
- Se partió de la versión ya commiteada por el usuario (`9d474fe`) y se nutrió con datos verificados en
  `mandalo/contexto/NOTAS.md` y `samawe/contexto/contexto.md` + `samawe/factus/`.
- **Mándalo**: publicada en las tres tiendas (antes decía solo Google Play), revisión de Apple superada,
  Sign in with Apple / Google, recargo por lluvia con Open-Meteo, módulo nativo Kotlin/Swift, entrega fallida,
  actualizaciones in-app.
- **Samawé**: Factus (cinco documentos DIAN), reservas en línea con vencimiento a 24 h, crédito con plazos y abonos,
  restaurante con recetas e inventario, SSR/SEO, Redis.
- Habilidades: tiendas (App Store Connect, Google Play Console, Huawei AppGallery, TestFlight) movidas a
  "Publicación y SEO"; quitado un `Nginx` repetido en Infraestructura.

### 9 oct 2026 (noche): sección "Redes e Infraestructura"
- Nueva página `/networking` (`pages/networking/`), enlazada en el navbar (escritorio y móvil) como "Redes".
- Contenido en `constants/networking.constants.ts`: `NETWORK_SERVICES` (tarjetas de servicios), `NETWORK_JOBS`
  (trabajos con fotos) y `OTHER_NETWORK_JOBS` (trabajos sin fotos).
- Fotos en `src/assets/images/networking/` (webp de 1000 px, sin EXIF/GPS), sacadas de `C:\Trabajo\{palacio,unad,arn}`.
- Trabajos: Palacio de Justicia Mocoa (sep 2026: Sede Central 3 SW + 1 AP; Sede Samay, SW de fibra),
  UNAD Puerto Asís (rack, 3 workstations, Windows Server, soporte a otras sedes; **sin fecha**),
  ARN Mocoa (may 2026: 2 puntos de datos, mapeo de puertos, limpieza del rack),
  Energía del Putumayo y La Previsora (sin fotos).
- Las marcas de "Equipos" (Juniper, Cisco, Fortinet) salen de lo que se ve en las fotos, no del relato del usuario.
- ARN = Agencia para la Reincorporación y la Normalización (confirmado). UNAD queda sin fecha (el usuario no la recuerda).
- "Sobre mí": párrafo de redes ("1 mes dedicado de tiempo completo") con enlace a `/networking`; sección con `md:my-16`
  para separarla del navbar y del footer.
- Habilidades: tarjeta nueva "Redes y Soporte" (`networkingTags`); React Native/Expo/NativeWind quedan solo en "Móvil";
  quitados `EAS Build` y `Firebase` duplicados de Infraestructura; Móvil suma módulos nativos, push, mapas y Sign in.

### ⚠️ Datos del portfolio que el contexto de samawe NO respalda
- **Pasarela de pagos / integración con Booking y Airbnb**: el contexto dice que la pasarela "no existe; el pago es
  manual (transferencia + comprobante)" y que Booking.com quedó aplazado → **se quitaron**.
- **Electron**, **multitenant**, "más de un año" (los repos actuales arrancan en feb 2026) y "eliminó las hojas de
  cálculo": no aparecen en la documentación ni en el código; se dejaron porque pueden venir de fases anteriores.
  Confirmar.

## Pendientes / ideas

- Página **Experiencia**: hoy es un placeholder sin ruta. Podría contar Samawé y Mándalo como experiencia
  freelance (2026) con fechas, clientes y responsabilidades.
- Los CV en PDF (`src/assets/files/CV-*.pdf`) no mencionan Mándalo todavía: actualizarlos.
- En la tarjeta de Mándalo, el botón dice "Ver Demo": podría valer la pena añadir enlaces a las tiendas
  (App Store / Google Play), lo que implica extender `ProjectInterface`.
- El texto escrito del home ("Desarrollador Full Stack") podría pasar a "Full Stack & Mobile".
- `README.md` es el genérico de Angular CLI.
