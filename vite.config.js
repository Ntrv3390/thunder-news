import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/v2': 'https://newsapi.org',
      '/v2/top-headlines': 'https://localhost:5000',
    }
  },
  plugins: [react()],
})
