import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Completely disables lightningcss and forces Vite to use regular CSS processing
export default defineConfig({
  plugins: [react()],
  css: {
    transformer: 'none',
  },
})
