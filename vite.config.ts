import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),    
  ],
  base: './'   // base: "/vite-portfolio/" działa tylko jeśli strona jest serwowana na github.io/repo-name/
})
