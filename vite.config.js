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
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',

          assetFileNames: ({ name }) => {
            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
              return 'assets/images/[name]-[hash][extname]';
            }

            if (/\.css$/.test(name ?? '')) {
              return 'assets/css/[name]-[hash][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
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
        includeAssets: ['*.ico', '*.png', 'images/*.*', 'i/*.*'],
        manifest: {
          name: env.VITE_APP_NAME,
          short_name: env.VITE_APP_NAME_SHORT,
          description: env.VITE_APP_DESCRIPTION,
          theme_color: env.VITE_APP_FOREGROUND_COLOR,
          icons: [
            {
              src: 'icon-72x72.png',
              sizes: '72x72',
              type: 'image/png',
              purpose: 'maskable any',
            },
            {
              src: 'icon-96x96.png',
              sizes: '96x96',
              type: 'image/png',
              purpose: 'maskable any',
            },
            {
              src: 'icon-128x128.png',
              sizes: '128x128',
              type: 'image/png',
              purpose: 'maskable any',
            },
            {
              src: 'icon-144x144.png',
              sizes: '144x144',
              type: 'image/png',
              purpose: 'maskable any',
            },
            {
              src: 'icon-152x152.png',
              sizes: '152x152',
              type: 'image/png',
              purpose: 'maskable any',
            },
            {
              src: 'icon-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'maskable any',
            },
            {
              src: 'icon-384x384.png',
              sizes: '384x384',
              type: 'image/png',
              purpose: 'maskable any',
            },
            {
              src: 'icon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable any',
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
