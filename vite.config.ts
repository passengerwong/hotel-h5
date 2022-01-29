import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import styleImport, { VantResolve } from 'vite-plugin-style-import';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'css': path.resolve(__dirname, './src/css')
    }
  },
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()]
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${path.resolve(__dirname, './src/css/theme.scss')}";`
      }
    }
  }
})
