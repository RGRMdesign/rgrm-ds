import type { StorybookConfig } from '@storybook/react-vite';
import remarkGfm from 'remark-gfm';

/** GitHub Pages project site: https://rgrmdesign.github.io/rgrm-ds/ */
const GITHUB_PAGES_BASE = '/rgrm-ds/';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    defaultName: 'Documentation',
  },
  async viteFinal(config, { configType }) {
    // Only GitHub Pages project sites need a subpath; Chromatic and local builds use `/`.
    if (configType === 'PRODUCTION' && process.env.STORYBOOK_PAGES === 'true') {
      config.base = GITHUB_PAGES_BASE;
    }
    return config;
  },
};

export default config;
