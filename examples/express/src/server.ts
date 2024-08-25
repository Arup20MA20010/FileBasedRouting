import { initFileRouter } from '../../../src/file-router'
import express from "express"
async function run() {
  const fileRouter = await initFileRouter({ baseDir: `${__dirname}/api` });

  const app = express();

  app.listen(4004, () => {
    console.log("Listening on port 4004")
  });
  app.use(fileRouter);
}

run();
