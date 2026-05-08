import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";



export default defineConfig({
  plugins: [react()],

  define: {
    "process.env": {},
  },

  build: {
    lib: {
      entry: "src/widget.tsx",
      name: "NewsletterWidget",
      fileName: "newsletter-widget",
      formats: ["iife"],
    },

    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },

  server: {
    proxy: {
      "/api/newsletter": {
        target: "https://neubox.com",
        changeOrigin: true,
        secure: true,

        rewrite: (path) =>
          path.replace("/api/newsletter", "/newsletter"),
      },
    },
  },
});