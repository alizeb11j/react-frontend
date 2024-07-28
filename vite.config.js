import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { defineConfig } from "vite"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port: 3000,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000/api/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/,'')
      }
    }
  },

})

