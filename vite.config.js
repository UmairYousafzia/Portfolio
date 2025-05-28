import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // 👈 this is important
  plugins: [
    laravel({
      input: 'resources/js/app.jsx',
      refresh: true,
    }),
    react(),
  ],
  optimizeDeps: {
    include: ['jquery'],
  },
});
