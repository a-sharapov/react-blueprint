/** @type {import('vite').UserConfig} */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    build: {
      outDir: env.VITE_OUTPUT_PATH,
    },
    publicDir: env.VITE_PUBLIC_PATH,
    root: env.VITE_ROOT_PATH,
    server: {
      port: env.VITE_APP_PORT,
    },
    plugins: [
      react(),
      tsconfigPaths(),
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: 'auto',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
        manifest: {
          name: env.VITE_APP_NAME,
          short_name: env.VITE_APP_NAME_SHORT,
          description: env.VITE_APP_DESCRIPTION,
          theme_color: env.VITE_APP_FOREGROUND_COLOR,
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,svg}'],
        },
        devOptions: {
          enabled: env.VITE_PWA_DEV_OPTIONS_ENABLED,
        },
      }),
    ],
  };
});
