import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio-HM-ABDULLAH/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
