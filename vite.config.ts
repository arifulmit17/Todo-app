import { defineConfig } from "vite";

import path from "path";
import  react  from '@vitejs/plugin-react';

// vite.config.ts
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 5273, // optional custom port
  },
});
