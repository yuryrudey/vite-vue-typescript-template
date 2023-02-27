import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const PORT = 8080;

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: PORT,
  },
  preview: {
    port: PORT,
  },
  plugins: [vue()],
});
