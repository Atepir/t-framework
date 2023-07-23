import fs from 'fs/promises';
import path from 'path';
import os from 'os';

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

export default async function () {
  // close the browser instance
  await global.__BROWSER_GLOBAL__.close();

  // clean-up the wsEndpoint file
  await fs.rm(DIR, {recursive: true, force: true});
};