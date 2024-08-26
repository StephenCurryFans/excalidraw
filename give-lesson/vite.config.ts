import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env.IS_PREACT": JSON.stringify("true"),
  },
  server: {
    host: '0.0.0.0',
    port: 80,
    proxy: {
      '/dev-api': {
        target: 'http://192.168.1.251/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev-api/, '')
      },
    }
  },
  plugins: [react()],
})
