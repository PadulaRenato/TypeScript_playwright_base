//==File used to define the main page object and its methods==//
import { Page, expect } from '@playwright/test';

export class MainPage {

  //===Locators===//

  private productItemLocator = 'a.products__list__list-item__item[href="#/product/01"]';
  private shoppingCartLocator = 'a.shopping-cart__link[href="#/cart"]';
  private footerCopyrightLocator = 'p.footer__copyright';
  private countrySelectorLocator = 'select.country-selector__select';
  private productPriceLocator = 'a.products__list__list-item__item__price';

  constructor(private page: Page) {}

  //===Methods===//

  async visit() {
    const baseUrl = process.env.BASE_URL;
    if (!baseUrl) {
      throw new Error('BASE_URL is not defined in the environment variables');
    }
    await this.page.goto(baseUrl);
  }

  async getTitle() {
    return this.page.title();
  }

  async clickGetStarted() {
    await this.page.click('text=Get started');
  }

  async getInstallationHeading() {
    return this.page.locator('h1:has-text("Installation")');
  }

  async verifyElementsVisibility() {
    await expect(this.page.locator(this.productItemLocator)).toBeVisible();
    await expect(this.page.locator(this.shoppingCartLocator)).toBeVisible();
    await expect(this.page.locator(this.footerCopyrightLocator)).toBeVisible();
    await expect(this.page.locator(this.countrySelectorLocator)).toBeVisible();
    await this.takeScreenshot();
  }

  async selectCountry(countryCode: string) {
    await this.page.selectOption(this.countrySelectorLocator, countryCode);
  }

  async verifySelectedCountry(expectedCountryCode: string) {
    const selectedOption = await this.page.locator(this.countrySelectorLocator).inputValue();
    expect(selectedOption).toBe(expectedCountryCode);

    const prices = await this.page.locator(this.productPriceLocator).allTextContents();
    for (const price of prices) {
      expect(price).toContain('R$');
    }
    await this.takeScreenshot();
  }
  
  async takeScreenshot() {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    await this.page.screenshot({ path: `screenshots/screenshot-${timestamp}.png`, fullPage: true });
  }

}