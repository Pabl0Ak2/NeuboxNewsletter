
//import "./widget"; Dejar solo para widget reutilizable universal
import './styles/widget.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const container = 
  document.getElementById('neubox-newsletter-widget') || 
  document.getElementById('root');

if (container) {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("No se encontró un contenedor para el widget (neubox-newsletter-widget o root)");
}