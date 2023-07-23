import { mkdir, writeFile } from 'fs/promises';
import os from 'os';
import path from 'path';
import puppeteer from 'puppeteer';
import dotenv from 'dotenv';
import _ from 'lodash';

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

dotenv.config();

export default async function () {
  const browser = await puppeteer.launch({
    headless: !eval(process.env.BROWSER_VISIBLE),
  });
  // store the browser instance so we can teardown it later
  // this global is only available in the teardown but not in TestEnvironments
  global.__BROWSER_GLOBAL__ = browser;

  // use the file system to expose the wsEndpoint for TestEnvironments
  await mkdir(DIR, { recursive: true });
  await writeFile(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
};