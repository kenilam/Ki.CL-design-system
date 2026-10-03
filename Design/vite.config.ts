import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { glob } from 'glob';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

import { getStyleLayer, LAYER_ORDER } from './scripts/get-style-layer';

const root = path.dirname(fileURLToPath(import.meta.url));
const src = path.resolve(root, 'src');

// Every Sass partial is available to every stylesheet in this package, as it
// was in the host. Only this package compiles them; the host reads the CSS.
const partials = glob
  .sync('**/_*.scss', { cwd: src, posix: true })
  .map((file) => `@use '${path.join(src, file)}' as *;`)
  .join('');

const prelude = `@use 'sass:color';@use 'sass:list';@use 'sass:math';${partials}`;

// Served at /design/* - base must match so chunk URLs resolve.
export default defineConfig({
  root,
  base: '/design/',
  plugins: [
    react(),
    federation({
      name: 'design',
      filename: 'remoteEntry.js',
      exposes: {
        './components': './src/components/index.ts',
        './core': './src/core/index.ts',
        './core/constants': './src/core/constants.ts',
        './hooks': './src/hooks/index.ts',
        './icons': './src/icons/index.ts',
        './router': './src/router/index.tsx',
        './status': './src/status/index.ts',
        './widgets': './src/widgets/index.ts',
      },
      // One stylesheet, loaded with whichever module the host asks for first.
      bundleAllCSS: true,
      shared: {
        react: { singleton: true, requiredVersion: '^19.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^19.0.0' },
        // NavLink and the status pages read the host's router context.
        'react-router-dom': { singleton: true, requiredVersion: '^7.0.0' },
        // Form components read the form context a view creates with useForm.
        'react-hook-form': { singleton: true, requiredVersion: '^7.0.0' },
      },
      dts: {
        generateTypes: {
          typesFolder: 'types',
          compileInChildProcess: true,
        },
      },
    }),
  ],
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
});
