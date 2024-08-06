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
        target: "https://backend-cv5tdrjbja-em.a.run.app/api/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/,'')
      }
    }
  },

})

