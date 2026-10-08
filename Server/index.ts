import appRoot from 'app-root-path';
import * as dotenv from 'dotenv';
import express from 'express';

import { precompressed } from './precompressed';

dotenv.config({ path: appRoot.resolve('.env') });

const PORT = Number(process.env.PORT) || 3200;
const DIST = appRoot.resolve('Design/dist');
/*
 * No CORS. Browsers never call this server directly: Cloud Run only accepts
 * internal traffic, and the host proxies /design to it same-origin, in Vite
 * locally and in its Express server on Cloud Run.
 */

const app = express();

app.get('/health', (_request, response) => {
  response.status(200).json({ status: 'ok' });
});

// Module Federation hosts look for @mf-types.zip by default.
app.get('/design/@mf-types.zip', (_request, response) => {
  response.sendFile(`${DIST}/types.zip`);
});

app.use(
  '/design',
  precompressed(DIST),
  express.static(DIST, {
    setHeaders(response, path) {
      // The entry keeps its name across releases, so it is checked every time.
      // The files under assets are content-hashed.
      response.setHeader(
        'Cache-Control',
        path.includes('/assets/')
          ? 'public, max-age=31536000, immutable'
          : 'no-cache'
      );
    },
  })
);

app.listen(PORT, () => {
  console.log(
    `Design system on http://localhost:${PORT}/design/remoteEntry.js`
  );
});
