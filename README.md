# ⚽ FanZone 2026 — Puntos de Encuentro Antes del Partido

**Web estática** con i18n para el **Mundial de la FIFA 2026** (Estados Unidos, México, Canadá). Muestra las 104 jornadas, 16 estadios y más de 26 zonas de encuentro para aficionados, con selección por IA del mejor punto de reunión previo a cada partido.

![Captura de pantalla de FanZone 2026](screenshot.png)
> *Placeholder: Captura de pantalla de la web. Añade una imagen `screenshot.png` en la raíz del proyecto.*

---

## 🚀 Funcionalidades

- **🌎 Internacionalización (i18n)** — Soporte multilingüe EN / ES / FR con conmutador en el navbar. Las traducciones se cargan desde `locales/` y se persisten en `localStorage`.
- **📅 104 partidos completos** — Fase de grupos + Ronda de 32, Octavos, Cuartos, Semifinales, Tercer Puesto y Final. Datos reales con fechass, horarios y husos horarios (UTC-5 / UTC-7).
- **🏟️ 16 estadios oficiales** — Desde el Estadio Azteca (CDMX) hasta el BC Place (Vancouver), pasando por SoFi, MetLife, Mercedes-Benz, Hard Rock y más.
- **🏙️ 16 ciudades anfitrionas** — Mexico City, Guadalajara, Monterrey, Arlington, Inglewood, East Rutherford, Atlanta, Miami Gardens, Seattle, Santa Clara, Foxborough, Philadelphia, Kansas City, Houston, Toronto, Vancouver.
- **🍺 Zonas de encuentro seleccionadas por IA** — Para cada partido, un algoritmo evalúa capacidad, puntuación y proximidad al estadio y recomienda el mejor bar, cantina o plaza para reunirse 4 horas antes del pitido inicial.
- **⚔️ Análisis de rivalidades** — Cada partido incluye nivel de rivalidad (1–5), contexto histórico, conflictos bélicos, historia futbolística y datos curiosos.
- **⏱️ Cuenta regresiva en vivo** — Temporizador hasta el kickoff con actualización cada segundo.
- **🎨 Diseño oscuro deportivo** — Tema `dark mode` con paleta deportiva (verde neón, naranja, dorado), tipografía Inter + Oswald y header con degradado.

---

## 🧰 Stack Tecnológico

| Capa        | Tecnología                     |
|-------------|--------------------------------|
| **HTML**    | HTML5 semántico + `data-i18n`  |
| **CSS**     | CSS3 vanilla (variables, flex, grid, backdrop-filter) |
| **JS**      | JavaScript vanilla (ES6+)      |
| **i18n**    | Motor propio en `js/i18n.js` + archivos JSON en `locales/` |
| **Datos**   | Objeto `WC2026` en `js/data.js` con estadios, sedes y partidos |
| **Hosting** | GitHub Pages (estático)        |
| **Deploy**  | Sin dependencias — se abre `index.html` en cualquier navegador |

---

## 📁 Estructura del Proyecto

```
world-cup-fanzone/
├── index.html              # Página principal — lista de partidos
├── match.html              # Detalle de partido — rivalidad, venue, cuenta regresiva
│
├── css/
│   └── style.css           # Estilos globales (tema oscuro, grid, navbar, hero)
│
├── js/
│   ├── i18n.js             # Motor de internacionalización (carga, traducción, persistencia)
│   ├── components.js       # Componentes compartidos (navbar, footer, selector de idioma)
│   └── data.js             # Dataset completo: 16 estadios, 26+ venues, 104 partidos
│
├── locales/
│   └── en.json             # Traducciones al inglés (base)
│   # (es.json, fr.json — próximos)

└── README.md               # Este archivo
```

---

## ⚙️ Instalación

No requiere instalación. Es una web 100% estática.

```bash
# 1. Clonar el repositorio
git clone https://github.com/popifresco12/world-cup-fanzone.git
cd world-cup-fanzone

# 2. Abrir en el navegador
open index.html
# o: xdg-open index.html
# o simplemente haz doble clic en index.html
```

Para desarrollo, cualquier servidor estático sirve:

```bash
# Con Python
python3 -m http.server 8000
# Abre http://localhost:8000

# Con Node (npx)
npx serve .
```

---

## 🗺️ Roadmap / Próximos Pasos

- [ ] Archivos de locales: `es.json`, `fr.json`
- [ ] Mapa interactivo con Leaflet.js para visualizar estadios y fan zones
- [ ] Filtros por país, grupo y nivel de rivalidad
- [ ] PWA (Service Worker + manifest) para instalación offline
- [ ] Datos de 2026 reales cuando FIFA confirme el calendario final

---

## 📜 Licencia

Proyecto personal y educativo. **No afiliado ni respaldado por la FIFA**. Datos de estadios basados en información pública. Las zonas de encuentro son selecciones algorítmicas con fines ilustrativos.

---

<p align="center">Hecho con ⚽ para los verdaderos fanáticos del fútbol.</p>
