<div align="center">

# 🐔 LibrePollo — Sitio Web Oficial

**Sitio web del proyecto LibreIncu: incubadora avícola de código abierto para la soberanía tecnológica y alimentaria**

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Licencia CC BY-SA 4.0](https://img.shields.io/badge/Licencia-CC%20BY--SA%204.0-yellow)](https://creativecommons.org/licenses/by-sa/4.0/)

*Una iniciativa de [AlterMundi](https://altermundi.net) y la [Comunidad, Trabajo y Organización (CTO)](https://www.facebook.com/comunidadtrabajoorganizacion)  
para las comunidades de la Agricultura Familiar, Campesina e Indígena (AFCI) de Córdoba, Argentina* 🇦🇷

</div>

---

## ¿Qué es LibreIncu?

**LibreIncu** es una incubadora avícola con tecnología de monitoreo y control en línea, diseñada específicamente para las necesidades de la producción familiar campesina e indígena. Es hardware libre, software libre y conocimiento libre.

Su objetivo es romper la **triple dependencia** que enfrenta la producción avícola familiar:

| # | Dependencia | Descripción |
|---|---|---|
| 1 | 🧬 **Genética** | Oligopolio mundial del pollito bebé híbrido (Cobb-Vantress / Aviagen) |
| 2 | 🌽 **Alimentaria** | Dieta industrial basada en insumos del agronegocio |
| 3 | ⚙️ **Tecnológica** | Incubadoras comerciales inaccesibles o diseñadas para hobbistas |

> **LibreIncu devuelve soberanía a quien produce alimentos.**

---

## ✨ Características del sitio

- 📱 **Demo interactiva** de la aplicación Android de monitoreo
- 📖 **Manuales completos** de armado, uso y mantenimiento
- 🔬 **Especificaciones técnicas** de hardware, firmware y software
- 🌐 **Ecosistema IoT** y tecnología seleccionada
- 🥚 **Guía de recolección e incubación** de huevos
- 📊 **Registro de impacto territorial** y avances del proyecto
- 🤝 **Canales de contacto** y redes sociales

---

## 🗺️ Mapa del sitio

| Ruta | Sección | Descripción |
|---|---|---|
| `/` | Inicio | Presentación del proyecto, características y acceso rápido |
| `/nosotros` | Sobre el proyecto | Origen, triple dependencia, prensa y difusión |
| `/app-movil` | App Móvil | Demo interactivo de la aplicación Android |
| `/aplicacion` | Manual de la App | Manual de usuario de la app LibrePollo |
| `/manual` | Manual de Armado | Guía de construcción de la incubadora |
| `/especificaciones` | Especificaciones | Material técnico: hardware, firmware y software |
| `/ecosistema` | Ecosistema | Ecosistema tecnológico e IoT |
| `/huevos` | Huevos | Guía de recolección, selección e incubación |
| `/buenas-practicas` | Buenas Prácticas | Manejo avícola responsable |
| `/solucion-problemas` | Solución de Problemas | Troubleshooting de problemas comunes |
| `/impacto` | Impacto | Avances y registro de impacto territorial |
| `/contacto` | Contacto | Canales de comunicación y redes sociales |
| `/cto` | CTO | Comunidad, Trabajo y Organización |

---

## 🛠️ Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [Next.js](https://nextjs.org) | 14.2.5 | Framework principal (App Router) |
| [React](https://react.dev) | 18 | UI y componentes |
| [TypeScript](https://www.typescriptlang.org) | 5 | Tipado estático |
| [Tailwind CSS](https://tailwindcss.com) | 3 | Estilos y diseño responsivo |
| [Lucide React](https://lucide.dev) | latest | Íconos |

---

## 🎨 Paleta de colores

El sitio utiliza una paleta de marca propia definida en `tailwind.config.ts`:

```
lp-yellow      #F5C518   ████  Amarillo principal
lp-yellowLight #F7D04E   ████  Amarillo claro
lp-yellowDark  #C9A010   ████  Amarillo oscuro
lp-gray        #E5E5E5   ████  Gris claro
lp-grayDark    #6B6B6B   ████  Gris oscuro
lp-black       #1A1A1A   ████  Negro
lp-white       #FAFAFA   ████  Blanco
```

---

## 🚀 Desarrollo local

### Requisitos previos

- [Node.js](https://nodejs.org) v18 o superior
- npm v9 o superior

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/SairaAsua/libreIncu-web.git
cd libreIncu-web

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en **http://localhost:3000** 🌐

### Build de producción

```bash
npm run build
npm start
```

Para exportar como sitio estático:

```bash
npm run build
# Los archivos estáticos se generan en la carpeta /out
```

---

## 📁 Estructura del proyecto

```
website-librepollo/
├── src/
│   ├── app/                        # Páginas (App Router de Next.js)
│   │   ├── page.tsx                # → Inicio
│   │   ├── layout.tsx              # Layout global
│   │   ├── globals.css             # Estilos globales
│   │   ├── nosotros/page.tsx       # → Sobre el proyecto
│   │   ├── app-movil/page.tsx      # → Demo App Móvil
│   │   ├── aplicacion/page.tsx     # → Manual de la App
│   │   ├── manual/page.tsx         # → Manual de Armado
│   │   ├── especificaciones/page.tsx # → Especificaciones técnicas
│   │   ├── ecosistema/page.tsx     # → Ecosistema IoT
│   │   ├── huevos/page.tsx         # → Guía de Huevos
│   │   ├── buenas-practicas/page.tsx # → Buenas Prácticas
│   │   ├── solucion-problemas/page.tsx # → Solución de Problemas
│   │   ├── impacto/page.tsx        # → Impacto Territorial
│   │   ├── contacto/page.tsx       # → Contacto
│   │   └── cto/page.tsx            # → Sobre CTO
│   └── components/                 # Componentes reutilizables
│       ├── Navigation.tsx          # Menú de navegación
│       ├── Footer.tsx              # Pie de página
│       ├── PageHeader.tsx          # Cabecera de páginas internas
│       └── AppDemo.tsx             # Demo interactivo de la App (client component)
├── public/
│   └── images/                     # Imágenes del proyecto
├── next.config.js                  # Configuración de Next.js
├── tailwind.config.ts              # Configuración de Tailwind CSS
└── tsconfig.json                   # Configuración de TypeScript
```

---

## 🤝 Cómo contribuir

¡Las contribuciones son bienvenidas! Si querés colaborar con este proyecto:

1. **Hacé un fork** del repositorio
2. **Creá una rama** para tu cambio: `git checkout -b mejora/nueva-seccion`
3. **Hacé tus cambios** y confirmalos: `git commit -m 'feat: agrego nueva sección'`
4. **Empujá tu rama**: `git push origin mejora/nueva-seccion`
5. **Abrí un Pull Request** describiendo los cambios

Para reportar bugs o sugerir mejoras, abrí un [Issue](../../issues).

---

## 📄 Licencia

Este proyecto es **software y contenido libre**.

Podés usarlo, modificarlo y distribuirlo bajo los términos de la licencia  
**[Creative Commons Attribution-ShareAlike 4.0 Internacional](https://creativecommons.org/licenses/by-sa/4.0/)** (CC BY-SA 4.0).

[![CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/88x31.png)](https://creativecommons.org/licenses/by-sa/4.0/)

---

## 📬 Contacto

- 🌐 Sitio web: [librepollo.altermundi.net](https://librepollo.altermundi.net)
- ✉️ Email: [info@altermundi.net](mailto:info@altermundi.net)
- 🐦 Redes: [@AlterMundi](https://twitter.com/AlterMundi)

---

<div align="center">

Desarrollado con ❤️ por **AlterMundi** y **CTO**  
para las comunidades campesinas e indígenas de Córdoba, Argentina.

*"La tecnología al servicio de la soberanía popular"*

</div>
