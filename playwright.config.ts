import { PlaywrightTestConfig } from '@playwright/test';
import allureConfig from './allure.config';

const config: PlaywrightTestConfig = {
  ...allureConfig,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    baseURL: process.env.BASE_URL,
  },
  testDir: 'src/specs',
  globalSetup: './src/support/hooks',
};

export default config;