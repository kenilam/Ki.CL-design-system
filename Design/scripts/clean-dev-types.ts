import { rmSync } from 'node:fs';
import path from 'node:path';

import type { Plugin } from 'vite';

/**
 * The federation plugin compiles the dev server's types into
 * `dist/.dev-server` and never clears it, so a `.d.ts` left by a moved or
 * deleted file goes into every `types.zip` and shadows the module that
 * replaced it. Clearing it lets the next compile write every file again.
 */
const cleanDevTypes = (root: string): Plugin => {
  const output = path.join(root, 'dist');
  const names = ['.dev-server', '.dev-server.d.ts', '.dev-server.zip'];

  const clean = () => {
    names.forEach((name) => {
      rmSync(path.join(output, name), { force: true, recursive: true });
    });
  };

  return {
    name: 'clean-dev-types',
    apply: 'serve',
    configureServer(server) {
      clean();
      server.watcher.on('unlink', clean);
      server.watcher.on('unlinkDir', clean);
    },
  };
};

export { cleanDevTypes };
