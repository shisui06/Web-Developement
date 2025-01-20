import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByLabel('Search Wikipedia').click();
  await page.getByLabel('Search Wikipedia').click();
  await page.getByLabel('Search Wikipedia').click();
  await page.getByLabel('Search Wikipedia').fill('plauwright');
  await page.getByRole('link', { name: 'Playwright Person who writes' }).click();
});


name: Playwright E2E Tests
 
on:
  push:
    branches: [playwright]
  pull_request:
    branches: [playwright] # Include pull requests as triggers for Playwright tests
 
jobs:
  e2e-tests:
    runs-on: ubuntu-latest
 
    steps:
      # Checkout the repository
      - name: Checkout code
        uses: actions/checkout@v3
 
      # Setup Node.js environment
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
 
      # Install project dependencies
      - name: Install dependencies
        run: npm install
 
      # Install Playwright Browsers
      - name: Install Playwright Browsers
        run: npx playwright install
 
      # Run Playwright tests
      - name: Run Playwright tests
        run: npx playwright test test-wikipedia.spec.js


        import { test, expect, chromium } from '@playwright/test';
 
test('test', async () => {
  // Launch the browser in visible (non-headless) mode
  const browser = await chromium.launch({ headless: true });
 
  // Create a new browser context with video recording enabled
  const context = await browser.newContext({
    recordVideo: { dir: 'videos/' }, // Directory for video recordings
  });
 
  // Create a new page within the context
  const page = await context.newPage();
 
  // Perform actions on the page
  await page.goto('https://www.wikipedia.org/');
  await page.getByLabel('Search Wikipedia').click();
  await page.getByLabel('Search Wikipedia').fill('Playwright');
  await page.getByRole('button', { name: 'Search' }).click();
 
  // Take a screenshot
  await page.screenshot({ path: 'screenshot.png' });
 
  // Close the context to finalize the video recording
  await context.close();
 
  // Close the browser
  await browser.close();
});