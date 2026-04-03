import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  publicDir: 'public', // ✅ FORÇA cópia da pasta public para o dist
  plugins: [
    vue(),
    tailwindcss()
  ],
})