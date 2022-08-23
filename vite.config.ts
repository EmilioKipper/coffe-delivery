import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: '@contexts',
        replacement: path.resolve(__dirname, 'src/contexts'),
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, 'src/utils'),
      },
      {
        find: '@services',
        replacement: path.resolve(__dirname, 'src/services'),
      },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/assets'),
      },
    ],
  },
});
