import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/CBNU-UXUI_GeoBukAA/',
  server: { port: 5173, open: true },
});
