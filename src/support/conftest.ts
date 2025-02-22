//===File used to configure the test environment===//
import { test } from '@playwright/test';
import { MainPage } from '../pages/mainPage';

let mainPage: MainPage;

async function beforeEachTest(page) {
  mainPage = new MainPage(page);
  await mainPage.visit();
  return mainPage;
}

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status === 'failed') {
    await page.screenshot({ path: `screenshots/${testInfo.title}.png`, fullPage: true });
  }
});

export { beforeEachTest, mainPage };