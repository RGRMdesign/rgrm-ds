import '@rgrmdesign/rgrm-ds-tokens';

import type { Preview } from '@storybook/react-vite';
import React from 'react';

import { applyDocumentTheme, resolveTheme } from './applyTheme';
import { DocsThemeCanvas } from './DocsThemeCanvas';
import { setupThemeSync } from './themeSync';
import './preview.css';

setupThemeSync();

const preview: Preview = {
  parameters: {
    layout: 'padded',
    docs: {
      codePanel: true,
      canvas: {
        layout: 'padded',
        sourceState: 'shown',
      },
    },
    options: {
      storySort: {
        order: [
          'Typography',
          [
            'Paragraph',
            [
              'Overview',
              'React',
              ['Documentation', '*'],
              'CSS',
              ['Documentation', '*'],
              'Element',
              ['Documentation', '*'],
            ],
          ],
        ],
      },
    },
  },
  globalTypes: {
    theme: {
      description:
        'Design token theme. Canvas tab: `<html data-theme>`. Docs: only story canvases.',
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
    (Story, { globals, viewMode }) => {
      const theme = resolveTheme(globals.theme);

      if (viewMode === 'docs') {
        return (
          <DocsThemeCanvas theme={theme}>
            <Story />
          </DocsThemeCanvas>
        );
      }

      applyDocumentTheme(theme);

      return (
        <div className="sb-story">
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
