import type { StorybookConfig } from '@storybook/react-vite';

/** GitHub Pages project site: https://rgrmdesign.github.io/rgrm-ds/ */
const GITHUB_PAGES_BASE = '/rgrm-ds/';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    defaultName: 'Documentation',
  },
  async viteFinal(config, { configType }) {
    if (configType === 'PRODUCTION') {
      config.base = GITHUB_PAGES_BASE;
    }
    return config;
  },
};

export default config;
