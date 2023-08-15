import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import legacy from '@vitejs/plugin-legacy';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy({
      polyfills: ['es.promise.finally'],
      targets: ['defaults']
    }),
    vue()
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
})