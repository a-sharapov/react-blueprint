/** @type {import('vite').UserConfig} */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    build: {
      outDir: env.VITE_OUTPUT_PATH,
    },
    publicDir: env.VITE_PUBLIC_PATH,
    root: env.VITE_ROOT_PATH,
    server: {
      port: env.VITE_APP_PORT || 3000,
    },
    plugins: [react(), tsconfigPaths()],
  };
});
