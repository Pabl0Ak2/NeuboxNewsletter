import { useState } from "react";
import { NewsletterWidget } from "./components/NewsletterWidget";

function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${
      isDark ? "dark bg-[#020617]" : "bg-gray-300"
    }`}>
      
      <div className="absolute top-8 right-8 flex items-center gap-3">
        <span id="theme-label" className="sr-only">Cambiar tema</span>
        
        <button
          type="button"
          role="switch"
          aria-checked={isDark}
          aria-labelledby="theme-label"
          onClick={toggleTheme}
          className={`relative inline-flex h-8 w-16 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
            isDark ? 'bg-blue-600' : 'bg-slate-300'
          }`}
        >

          <span
            aria-hidden="true"
            className={`pointer-events-none relative inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
              isDark ? 'translate-x-8' : 'translate-x-0'
            }`}
          >
            <span
              className={`absolute inset-0 flex h-full w-full items-center justify-center transition-opacity ${
                isDark ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in'
              }`}
              aria-hidden="true"
            >
              ☀️
            </span>
            <span
              className={`absolute inset-0 flex h-full w-full items-center justify-center transition-opacity ${
                isDark ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out'
              }`}
              aria-hidden="true"
            >
              🌙
            </span>
          </span>
        </button>
      </div>

      <div className="w-full max-w-4xl text-center">
        <h1 className={`mb-8 text-3xl md:text-4xl font-extrabold tracking-tight transition-colors duration-300 ${
          isDark ? "text-white" : "text-slate-800"
        }`}>
          Prueba Técnica Widget Distribuible
        </h1>
        
        <NewsletterWidget
          source="vite-dev"
          theme={isDark ? "dark" : "light"}
        />
      </div>
    </div>
  );
}

export default App;