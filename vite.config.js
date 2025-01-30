import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import copy from 'rollup-plugin-copy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
      copy({
        targets: [
          {src:'src/manifest.json', dest:'dist'},
          {src:'src/assets/logo.png', dest:'dist/assets'},
          {src:'src/images', dest:'dist'},
          {src:'src/js',dest:'dist'},
        ],
        hook:'writeBundle'
      })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
