//===File used to configure the test environment===//
import { FullConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

async function globalSetup(config: FullConfig) {
  console.log('Running global setup...');
  console.log(`Base URL: ${process.env.BASE_URL}`);
}

export default globalSetup;