import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/ 
export default defineConfig({
  base: '/',
  plugins: [react(),
  tailwindcss(),],
  css: {
    postcss: './postcss.config.js', // Pointing to PostCSS config file
  },
  server: {
    port: 3000,  // Change this to your desired port
    open: true,  // Automatically open the browser after server is started
  },
  build: {
    outDir: 'dist',  // Default output directory, no need to change unless customized
  }
});
