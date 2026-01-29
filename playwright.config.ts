import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Run tests in files in parallel
  fullyParallel: true,

  // Fail on CI if test.only is left in the code
  forbidOnly: !!process.env.CI,

  // Retry on CI only
  retries: process.env.CI ? 2 : 0,

  // Workers
  workers: process.env.CI ? 1 : undefined,

  // ✅ Always generate HTML report (like your friend)
  reporter: [['html', { open: 'never', outputFolder: 'playwright-report' }]],

  use: {
    // ✅ Records trace only when retry happens (good for debugging)
    trace: 'on-first-retry',

    // Optional but useful
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  // ✅ Run each test on 3 browsers (chromium/firefox/webkit)
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  // Optional: Set a global timeout (prevents long hanging tests)
  timeout: 30_000,
  expect: {
    timeout: 10_000,
  },
});
