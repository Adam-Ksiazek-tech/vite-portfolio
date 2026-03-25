import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),    
  ],
  base: '/vite-portfolio/'  // <- nazwa repo na GitHub, konieczne dla Pages
})
