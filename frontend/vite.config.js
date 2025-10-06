import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    // 🔧 Disable LightningCSS (causes build error on Vercel)
    lightningcss: false,
  },
  build: {
    cssMinify: false, // optional but helps avoid LightningCSS entirely
  },
})
