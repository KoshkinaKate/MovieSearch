import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3001
  },
    define: {
      'import.meta.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
})
