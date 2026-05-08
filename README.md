# Newsletter Widget
Widget reutilizable desarrollado en **React + TypeScript** para suscripción a newsletter mediante el endpoint público de Neubox. Utilice `react-to-webcomponent`, este widget se puede integrar en cualquier entorno web como un **Custom Element** estándar.

## 🚀 Características
- ✅ **Widget Reutilizable:** Código único para múltiples plataformas.
- ✅ **Integración Universal:** Funciona mediante Custom Elements (`<newsletter-widget>`).
- ✅ **Bundle Distribuible:** Generado con Vite para un peso mínimo.
- ✅ **Gestión de Estados:** Manejo de carga, errores y éxito.
- ✅ **UI/UX:** Modal fullscreen de éxito y alertas visuales de error.
- ✅ **Configuración Dinámica:** Personalizable mediante atributos de HTML.

## 🛠️ Tecnologías utilizadas
- [React](https://reactjs.org/) - Librería de UI.
- [TypeScript](https://www.typescriptlang.org/) - Tipado estricto.
- [Vite](https://vitejs.dev/) - Bundler de nueva generación.
- [react-to-webcomponent](https://github.com/bitovi/react-to-webcomponent) - Conversión a Web Components.

---

## Instalar dependecias
- npm install

## Instalar React Web Component
- npm install react-to-webcomponent

## Iniciar servidor local
- npm run dev

## Generar build de producción
Ejecuta el siguiente comando para generar los archivos distribuibles:
- npm run build

## Estructura de carpetas 
src/
 ├── components/    # Componentes de React
 ├── services/      # Lógica de llamadas a API
 ├── styles/        # CSS Modules o globales
 ├── types/         # Definiciones de TypeScript
 ├── widget.tsx     # Punto de entrada del Web Component
 └── main.tsx       # Punto de entrada para desarrollo

## Modos de Renderizado

El widget está diseñado para ser flexible según el contenedor donde se aloje:

1. **Modo Desarrollo (Vite):** Busca el ID `#root`.
2. **Modo Producción / Universal:** Busca el ID `#neubox-newsletter-widget`.
3. **Modo Web Component:** Se autoinyecta mediante la etiqueta `<newsletter-widget>`.

## Entornos de Prueba

El proyecto cuenta con dos formas de ejecución:

### 1. Desarrollo (Vite)
Para trabajar en los componentes con recarga rápida:
- Usa el archivo `index.html` de la raíz.
- Comando: `npm run dev`

### 2. Prueba de Integración
Para probar cómo se comportará el widget en un entorno real (como WordPress o HTML plano):
- Ubicación: `test/index.html`
- **Nota:** Este archivo requiere que primero ejecutes `npm run build` y copies los archivos generados de `dist/` a `test/`.

```html
<link rel="stylesheet" href="./newsletter-widget.css" />
<newsletter-widget></newsletter-widget>
<script>
  var process = { env: { NODE_ENV: "production" } };
</script>
<script src="./newsletter-widget.iife.js"></script>
