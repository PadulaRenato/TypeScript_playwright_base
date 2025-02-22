//===File used to define the homepage tests
import { test, expect } from '@playwright/test';
import { beforeEachTest, mainPage } from '../support/conftest'; // Importa o beforeEachTest e mainPage

test.describe('Mystore Homepage', () => {

  test.beforeEach(async ({ page }) => {
    await beforeEachTest(page);
  });

  test('should have the correct title and visible elements', async ({ page }) => {
    await test.step('Check the page title', async () => {
      const title = await mainPage.getTitle();
      expect(title).toContain('MyStore Demo');
    });
    await test.step('Check if the elements are visible', async () => {
      await mainPage.verifyElementsVisibility();
    });
  });

  test('should allow selecting Brazil in the country selector', async ({ page }) => {
    await test.step('Select Brazil in the country selector', async () => {
      await mainPage.selectCountry('BR');
    });
    await test.step('Check if Brazil is selected', async () => {
      await mainPage.verifySelectedCountry('BR');
    });
  });
});