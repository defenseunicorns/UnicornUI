import { type PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    timeout: 60000000,
    command: 'npm run build && npm run preview',
    port: 4173
  },
  use: {
    video: 'off'
  }
};

export default config;
