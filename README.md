# TicketExpress — Inicio (sin avisos)

Primera pantalla de TicketExpress, basada en el frame **Inicio** del Figma minimalista. La entrega incluye únicamente **Inicio**; la pantalla **Explorar eventos** la desarrolla otro integrante.

## Archivos

```text
TicketExpress_Inicio_Sin_Avisos/
├── index.html   # HTML5 semántico: header, nav, main, section, article, aside, footer
├── style.css    # CSS Grid, Flexbox y diseño responsive
├── script.js    # Filtros, búsqueda, menú y navegación futura
└── README.md
```

## Funciones de esta entrega

- Inicio mantiene el diseño minimalista de Figma y las **ocho tarjetas**.
- El menú hamburguesa, la búsqueda local, el selector de ciudad y los filtros por categoría funcionan.
- **Mis entradas**, **Iniciar sesión**, **Ayuda**, **Política de privacidad** y **Términos** se ven en la interfaz pero están deshabilitados: no muestran ninguna alerta ni ventana emergente.
- Al pulsar los eventos o el enlace **Explorar eventos**, no ocurre nada mientras esa segunda pantalla no esté integrada. **No hay avisos de «Próximamente».**
- No existe código de ventanas emergentes (`dialog`, `alert`, `showModal`) ni estilos del antiguo modal.

## Integrar la pantalla Explorar eventos

Cuando tu compañero termine su parte, guardá el archivo `explorar.html` al lado de `index.html` (o adaptá las rutas a la estructura conjunta). En `script.js`, cambiá:

```js
const EXPLORAR_HABILITADO = false;
```

por:

```js
const EXPLORAR_HABILITADO = true;
```

El menú y las tarjetas ya tienen enlaces hacia `explorar.html`. Los enlaces de las tarjetas añaden el parámetro `evento`, por ejemplo `explorar.html?evento=nocturna-sessions`.

## Responsive y rúbrica

| Criterio | Cómo está implementado |
|---|---|
| HTML semántico | `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, `figure`, `time` |
| Código legible | HTML, CSS y JavaScript separados, indentados y con nombres de clases consistentes |
| Flexbox | Cabecera, barra de filtros, búsqueda y footer |
| CSS Grid | Cuadrícula de tarjetas, sin posicionamiento absoluto en el layout general |
| Estilos reutilizables | Variables CSS, clases de tarjetas y controles compartidos |
| Desktop | 1200 px o más: 4 columnas |
| Tablet | 768–1199 px: 3 columnas |
| Mobile | 767 px o menos: 2 columnas |
| Figma | Ocho afiches geométricos, escala de grises, tipografía Inter y espaciado editorial |

Los datos de eventos son **ficticios**, tomados del prototipo. Las fechas y precios no reflejan una cartelera real.

## Para ejecutar

1. Abrí la carpeta del proyecto desde **VS Code**.
2. Abrí `index.html` en un navegador o ejecutalo con **Live Server**.
3. Probá los tamaños de 1440, 1024 y 375 px en las herramientas de desarrollador (`F12`).
4. El HTML, CSS y JS se pueden integrar en el repositorio colaborativo del equipo.

## Git (ejemplo)

```bash
git checkout -b feature/inicio
git add index.html style.css script.js README.md
git commit -m "fix: retirar avisos de funciones futuras en inicio"
git push -u origin feature/inicio
```

Los commits, las ramas y el reparto del trabajo deben existir realmente en Git para obtener la puntuación del trabajo en equipo. La rúbrica exige también la pantalla Explorar, que no forma parte de estos archivos.
