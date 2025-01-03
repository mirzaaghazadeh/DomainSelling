import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs/promises';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-price-file',
      async writeBundle() {
        try {
          await fs.copyFile(
            resolve('public', 'price.txt'),
            resolve('dist', 'price.txt')
          );
        } catch (error) {
          console.error('Error copying price.txt:', error);
        }
      }
    }
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  }
});