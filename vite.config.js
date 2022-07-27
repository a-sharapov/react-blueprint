/** @type {import('vite').UserConfig} */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    outDir: './build',
  },
  publicDir: './public',
  root: './',
  server: {
    port: 3000,
  },
  plugins: [react(), tsconfigPaths()],
});
