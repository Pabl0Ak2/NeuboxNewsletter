Justificación Técnica
Como responsable del desarrollo de este widget, tomé una serie de decisiones tecnológicas orientadas a garantizar la máxima compatibilidad, un rendimiento óptimo y una experiencia de usuario (UX) de primer nivel.

Stack Tecnológico
React & TypeScript: Elegí React por su arquitectura basada en componentes, lo que me permitió separar la lógica del formulario, los estados de carga y el modal de éxito de manera organizada. El uso de TypeScript fue fundamental para establecer contratos claros (interfaces) en las respuestas de la API y las props, asegurando un código robusto y fácil de mantener.

Vite (Modo Librería): Utilicé Vite como bundler por su velocidad y su excelente soporte para generar archivos distribuidos. Configuré el modo librería para exportar un único bundle optimizado (IIFE), eliminando código innecesario y garantizando una carga ultrarrápida en producción.

Estrategia de Distribución
Web Components vs. Iframe: Decidí evitar el uso de iframes para eludir sus limitaciones con el manejo de overlays globales. En su lugar, implementé Web Components mediante la librería react-to-webcomponent. Esto me permite ofrecer una integración universal (Wordpress, Laravel, HTML plano) donde el widget se comporta como una etiqueta nativa <newsletter-widget>, permitiendo que el modal de éxito sea realmente fullscreen y se integre visualmente con el sitio host.

UX y Funcionalidades Críticas
Modal de Éxito Fullscreen: Para asegurar que el mensaje de éxito capture la atención del usuario, diseñé un modal con position: fixed y un z-index elevado. Refforcé la accesibilidad (A11y) implementando el cierre con la tecla Escape, bloqueo de scroll en el body y el uso correcto de roles ARIA (dialog, modal).

Gestión de Errores Multinivel: Diseñé un sistema de validación que actúa en tres capas: validación de campos obligatorios, validación de formato de email y manejo de excepciones de red o respuestas de error del servidor.

Arquitectura Desacoplada (Service Layer): Separé toda la lógica de consumo de la API en una capa de servicios independiente (services/newsletter.ts). Esto mantiene mis componentes de React "limpios" y enfocados únicamente en la representación visual, facilitando futuras actualizaciones en la lógica de negocio.

Flexibilidad y Analítica
Props Dinámicas: Expuse propiedades como apiUrl, theme y source a través del Custom Element. El parámetro source es especialmente valioso, ya que permite al equipo de marketing o analítica identificar exactamente desde qué plataforma (ej. Wordpress vs. Landing Page) provienen los suscriptores, facilitando el tracking multiplataforma.