# Redirect: jhonlegardaportfolio.netlify.app → jairolegarda.tech

Las tarjetas de presentación impresas tienen `jhonlegardaportfolio.netlify.app`. Este mini sitio en Astro hace que esa URL siga funcionando y lleve al portafolio nuevo (`jairolegarda.tech`, con panel administrativo, en el VPS).

## Cómo redirige

1. **301 de Netlify** (lo normal): `public/_redirects` y `../netlify.toml` mandan todo `/*` a `https://jairolegarda.tech/:splat`. La ruta se conserva: `/projects` → `jairolegarda.tech/projects`.
2. **Respaldo en el HTML**: si el 301 no aplicara, `index.html` y `404.html` redirigen con JavaScript (conservando ruta, búsqueda y ancla) y con `<meta refresh>` si no hay JavaScript.

## Publicar

`../netlify.toml` le dice a Netlify que construya esta carpeta (`base = "redirect"`) en vez del Angular de la raíz. Netlify publica desde la rama **`dev`**: el redirect se activa al hacer merge de esta rama a `dev`.

> ⚠️ Hacer el merge **solo cuando `jairolegarda.tech` ya esté en línea**. Si no, quien escanee una tarjeta llega a un dominio que no responde.

```bash
cd redirect
npm install
npm run build   # dist/ con index.html, 404.html y _redirects
```

El portafolio Angular de la raíz queda como archivo: ya no se publica.

## `angular.json` vacío

El sitio tiene instalado desde el panel de Netlify el plugin `@netlify/angular-runtime`, que falla si no encuentra un `angular.json`. `redirect/angular.json` (`{}`) existe solo para que el plugin lo encuentre, no vea `@angular/core` instalado y se salte ("Skipping build plugin"). No borrarlo mientras el plugin siga instalado.
