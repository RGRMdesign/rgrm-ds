import '@rgrmdesign/rgrm-ds-tokens';

import type { Preview } from '@storybook/react-vite';

import './preview.css';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      canvas: { layout: 'padded' },
    },
  },
  globalTypes: {
    theme: {
      description: 'Design token theme on `<html data-theme>`',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'root', title: 'Root' },
          { value: 'dark', title: 'Dark' },
          { value: 'brand', title: 'Brand' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'root',
  },
  decorators: [
    (Story, { globals }) => {
      document.documentElement.dataset.theme =
        typeof globals.theme === 'string' ? globals.theme : 'root';

      return (
        <div className="sb-story">
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
