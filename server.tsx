import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import serialize from 'serialize-javascript';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = 5173;

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('/*', async (req, res, next) => {
    const url = req.originalUrl;
    try {
      let template = await readFile(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);

      const parts = template.split('<!--ssr-outlet-->');

      const { setupStore } = await vite.ssrLoadModule('/src/store/index.ts');
      const { apiRequest } = await vite.ssrLoadModule('/src/utilits/apiRequest.ts');
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

      // const store = setupStore();
      // await apiRequest(store);

      const { pipe } = await render(url, {
        onShellReady() {
          res.write(parts[0]);
          pipe(res);
        },
        onShellError(err: Error) {
          console.error(err);
        },
        onAllReady() {
          res.write(parts[1]);
          // .replace(
          //   '<!--preloadedState-->',
          //   `<script>window.__PRELOADED_STATE__ = ${serialize({ ...store.getState() })}</script>`
          // )
          res.end();
        },
        onError(err: Error) {
          console.error(err);
        },
      });
    } catch (e) {
      if (e instanceof Error) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    }
  });

  app.listen(port);
}

createServer();
console.log(`Server is running on http://localhost:${5173}/`);