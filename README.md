# Dra. Cristina Urrutia Grabuska — landing editorial

Sitio de estética orofacial en Concepción. React 19, TypeScript estricto, Vite 6, Tailwind CSS 4 y Lucide. Propuesta visual «Natural Elegance — Medical Confidence», con tipografía Cormorant Garamond y Manrope, composición asimétrica y paleta marfil, carbón y champaña.

## Ejecutar

Requiere Node.js 22 y npm.

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm run preview
```

## Estructura

- `src/main.tsx`: composición de las secciones y estado de diálogos/menú.
- `src/components/ContactButton.tsx`: CTA reutilizable, estado sin configuración.
- `src/config/site.ts`: identidad, validación de enlaces y variables públicas.
- `src/data/content.ts`: tratamientos y preguntas frecuentes editables.
- `src/utils/contact.ts`: mensajes y enlaces oficiales wa.me; evento de contacto opcional.
- `src/styles/site.css`: diseño editorial, responsive y reducción de movimiento; integración Tailwind.
- `src/assets`, `src/sections`, `src/hooks`, `src/types`: reservados para ampliar el proyecto.
- `scripts/seo.mjs`: robots y sitemap de producción según configuración.
- `vercel.json`: build, salida estática y cabeceras de seguridad.

## Configuración y datos pendientes

Copiar `.env.example` a `.env.local` para desarrollo. En Vercel, configurar variables en Settings → Environment Variables y volver a desplegar. Todas las variables VITE son públicas: nunca incluir secretos.

| Variable | Contenido |
| --- | --- |
| VITE_WHATSAPP_NUMBER | Número real con código país, únicamente dígitos, sin + ni espacios. |
| VITE_GOOGLE_MAPS_URL | URL HTTPS del perfil oficial verificado; se utiliza para ubicación y consulta de reseñas. |
| VITE_GOOGLE_REVIEW_URL | Enlace oficial «Solicitar reseñas» del perfil de Google Business Profile. |
| VITE_GOOGLE_PLACE_ID | Identificador opcional para una futura integración de Places; actualmente no se consulta ninguna API. |
| VITE_ADDRESS | Dirección exacta confirmada. |
| VITE_HOURS | Horarios confirmados. |
| VITE_INSTAGRAM_URL | Perfil oficial confirmado, HTTPS. |
| VITE_SITE_URL | URL canónica final HTTPS. |
| VITE_PUBLICATION_READY | false por defecto; true solo después de verificar todo el contenido. |

Sin datos válidos, los enlaces quedan claramente inhabilitados. No se infieren teléfonos, enlaces, horarios, títulos, certificaciones ni reseñas. Las composiciones CSS son provisionales y no representan a la doctora ni resultados clínicos. Incorporar retratos auténticos y fotografías autorizadas optimizadas en AVIF/WebP, con dimensiones, srcset y carga diferida fuera del hero. La frase editorial de la sección Sobre mí es una propuesta de copy, pendiente de aprobación profesional.

## Google

Desde el perfil real, copiar el enlace público de Maps y el enlace para escribir reseñas. Verificar ambos en una ventana privada. No usar una búsqueda genérica como si fuera el perfil oficial. No hay scraping, puntuaciones o testimonios ficticios. No se muestran reseñas en vivo hasta contar con una integración autorizada. Una API con secretos necesitará función serverless, variables privadas, límites y atribuciones de Google; nunca colocar la clave privada en VITE.

## SEO y privacidad

Borrador con noindex y robots Disallow. Al habilitar publicación con URL HTTPS, el build genera sitemap.xml, habilita robots y actualiza la meta robots; la aplicación añade canonical, og:url y Schema.org WebSite. No se declaran especialidades sanitarias ni estrellas de reseñas. Ampliar schema a la entidad profesional solo tras verificar credenciales. Añadir imagen OG real antes de compartir. Registrar el dominio final en Search Console y enviar sitemap.xml.

No hay formulario clínico ni seguimiento activado. `contact-click` solo se emite si `analytics-consent` vale `granted` en localStorage; no se conecta a un proveedor ni envía nombre de tratamiento o datos de pacientes. Si se incorpora analítica, implementar consentimiento revocable y actualizar privacidad antes de activarla. Google Fonts es externo: alojar las fuentes localmente para producción.

La política de privacidad es provisional. Confirmar responsable, contacto, proveedores, finalidades y ejercicio de derechos. Revisión normativa de referencia: Ley 19.628 y modificaciones de Ley 21.719, cuya entrada en vigencia está prevista para el 1 de diciembre de 2026 (fuente: https://www.bcn.cl/leychile/Navegar?idNorma=141599). Revisar publicidad sanitaria, título profesional y competencias en registros oficiales con el responsable clínico antes de publicar. Este proyecto no certifica cumplimiento jurídico ni sanitario.

## GitHub

Repositorio local preparado; no se crea un repositorio remoto sin confirmar propietario, nombre y visibilidad. No incluir .env ni node_modules. Después de verificar `gh auth status` y confirmar esos tres datos:

```sh
git add .
git commit -m "Crear landing editorial de estética orofacial"
gh repo create PROPIETARIO/cristina-urrutia-estetica-web --private --source=. --remote=origin --push
```

Cambiar --private a --public únicamente si esa visibilidad está confirmada. Si origin ya existe, revisar `git remote -v` antes de configurarlo. No se ha publicado en GitHub.

## Vercel y dominio .cl

1. Importar el repositorio confirmado en Vercel; framework Vite, build `npm run build`, salida `dist`.
2. Cargar variables; mantener VITE_PUBLICATION_READY=false durante la revisión.
3. Confirmar credenciales, tratamientos, contactos, fotografías, permisos y privacidad.
4. Conectar un dominio .cl adquirido en Settings → Domains y aplicar los registros DNS indicados por Vercel. Verificar HTTPS y redirección al dominio canónico.
5. Configurar URL final, habilitar publicación y desplegar nuevamente.
6. Revisar enlaces, teclado, lectores de pantalla, zoom 200%, móvil y escritorio. Ejecutar Lighthouse sobre producción.

## Validación

Ver `VALIDACION.md` para los resultados reales. Las métricas Lighthouse y Core Web Vitals no se presuponen cumplidas. No hay backend ni almacenamiento de antecedentes clínicos.
