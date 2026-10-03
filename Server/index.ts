import appRoot from 'app-root-path';
import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';

dotenv.config({ path: appRoot.resolve('.env') });

const PORT = Number(process.env.PORT) || 3200;
const DIST = appRoot.resolve('Design/dist');
const origins = process.env.CORS_ORIGINS?.split(',') ?? [];

// The host loads the remote as ES modules, which browsers fetch with CORS.
const corsMiddleware = cors({
  origin(origin, callback) {
    if (!origin || process.env.NODE_ENV === 'development') {
      callback(null, true);
      return;
    }

    if (origins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`Origin ${origin} not allowed by CORS`));
    }
  },
});

const app = express();

app.get('/health', (_request, response) => {
  response.status(200).json({ status: 'ok' });
});

// Module Federation hosts look for @mf-types.zip by default.
app.get('/design/@mf-types.zip', corsMiddleware, (_request, response) => {
  response.sendFile(`${DIST}/types.zip`);
});

app.use(
  '/design',
  corsMiddleware,
  express.static(DIST, {
    setHeaders(response, path) {
      // The entry keeps its name across releases, so it has to be revalidated.
      // Everything else is content-hashed.
      response.setHeader(
        'Cache-Control',
        path.endsWith('remoteEntry.js')
          ? 'no-cache'
          : 'public, max-age=31536000, immutable'
      );
    },
  })
);

app.listen(PORT, () => {
  console.log(`Design system on http://localhost:${PORT}/design/remoteEntry.js`);
});
