import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { glob } from 'glob';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import { federation } from '@module-federation/vite';
import { compression } from 'vite-plugin-compression2';

import { getStyleLayer, LAYER_ORDER } from './scripts/get-style-layer';

const root = path.dirname(fileURLToPath(import.meta.url));
const src = path.resolve(root, 'src');
const env = loadEnv('development', path.resolve(root, '..'), '');

const partials = glob
  .sync('**/_*.scss', { cwd: src, posix: true })
  .map((file) => {
    return `@use '${path.join(src, file)}' as *;`;
  })
  .join('');

const prelude = `@use 'sass:color';@use 'sass:list';@use 'sass:map';@use 'sass:math';${partials}`;

// Served at /design/* - base must match so chunk URLs resolve.
export default defineConfig({
  root,
  base: '/design/',
  plugins: [
    compression({ algorithms: ['gzip', 'brotliCompress'] }),
    // Before React, which compiles the JSX that MDX outputs.
    { enforce: 'pre', ...mdx() },
    react({ include: /\.(mdx|tsx?)$/ }),
    federation({
      name: 'design',
      filename: 'remoteEntry.js',
      exposes: {
        './components': './src/components/index.ts',
        './core': './src/core/index.ts',
        './core/constants': './src/core/constants.ts',
        './docs': './src/docs/index.tsx',
        './hooks': './src/hooks/index.ts',
        './icons': './src/icons/index.ts',
        './router': './src/router/index.tsx',
        './status': './src/status/index.ts',
        './widgets': './src/widgets/index.ts',
      },
      bundleAllCSS: true,
      shared: {
        react: { singleton: true, requiredVersion: '^19.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^19.0.0' },
        'react-router-dom': { singleton: true, requiredVersion: '^7.0.0' },
        'react-hook-form': { singleton: true, requiredVersion: '^7.0.0' },
        i18next: { singleton: true, requiredVersion: '^26.0.0' },
        'react-i18next': { singleton: true, requiredVersion: '^17.0.0' },
      },
      dev: {
        /*
         * Its browser plugin opens a socket to 127.0.0.1:16322 from the
         * host's page and logs an error on every load. The host pulls types
         * itself.
         */
        disableDynamicRemoteTypeHints: true,
      },
      dts: {
        generateTypes: {
          typesFolder: 'types',
          compileInChildProcess: true,
        },
      },
    }),
  ],
  resolve: {
    // The same alias as `paths` in tsconfig.json.
    alias: { design: src },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // include-media 2.0.0 still uses the deprecated Sass if() syntax.
        quietDeps: true,
        additionalData(source: string, filename: string) {
          const layer = getStyleLayer(filename);

          // The `@use` prelude has to come first; it compiles to nothing.
          return layer
            ? `${prelude}${LAYER_ORDER}@layer ${layer} {${source}}`
            : `${prelude}${source}`;
        },
      },
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    modulePreload: false,
    cssCodeSplit: false,
    sourcemap: true,
  },
  server: {
    port: Number(env.PORT) || 3200,
    strictPort: true,
  },
});
