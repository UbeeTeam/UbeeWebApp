import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@stores', replacement: fileURLToPath(new URL('./src/stores', import.meta.url)) },
      { find: '@interfaces', replacement: fileURLToPath(new URL('./src/interfaces', import.meta.url)) },
      { find: '@atoms', replacement: fileURLToPath(new URL('./src/components/atoms', import.meta.url)) },
      { find: '@molecules', replacement: fileURLToPath(new URL('./src/components/molecules', import.meta.url)) },
      { find: '@organisms', replacement: fileURLToPath(new URL('./src/components/organisms', import.meta.url)) },
    ]
  }
})
