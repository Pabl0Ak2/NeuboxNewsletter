Decision de Arquitectura
Diseñé este widget bajo una premisa: "Escríbelo una vez, ejecútalo en cualquier lugar". La arquitectura está optimizada para que un desarrollo moderno en React sea 100% agnóstico al entorno donde se integre.

Núcleo: Web Components (Custom Elements)
En lugar de un iframe, utilicé Custom Elements para registrar la etiqueta <newsletter-widget>.

Ventaja: El sitio host no necesita React ni dependencias externas; solo importa el bundle y el widget funciona como una etiqueta HTML nativa.

Encapsulamiento: Toda la lógica de validación, estados y llamadas a la API queda aislada, exponiendo una interfaz de integración extremadamente simple.

Integración Visual y CSS
Tomé la decisión consciente de no usar Shadow DOM.

Razón: Esto permite que el widget herede la tipografía del sitio host, logrando una integración visual orgánica.

Seguridad: Para evitar conflictos, apliqué Namespacing (.newsletter-*) en todas las clases de CSS y evité modificar etiquetas globales.

UX Real: Al estar en el DOM principal, el modal de éxito es realmente fullscreen, superando las limitaciones de recorte de los iframes tradicionales.

Distribución y Ciclo de Vida
Bundle Optimizado: Utilicé Vite en modo librería para generar un archivo IIFE autoejecutable, minimizando el peso y eliminando el código muerto (tree-shaking).

Mantenibilidad: El proyecto está estructurado bajo Semantic Versioning (SemVer), permitiendo actualizaciones controladas y rollbacks rápidos sin afectar la estabilidad del sitio cliente.

Service Layer: La lógica de negocio está totalmente desacoplada de la UI, facilitando cambios futuros en el endpoint de Neubox sin tocar los componentes visuales.