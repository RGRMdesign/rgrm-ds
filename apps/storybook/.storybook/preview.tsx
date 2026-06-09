import '@rgrmdesign/rgrm-ds-tokens';
import '@rgrmdesign/rgrm-ds-css/fonts';
import { applyRootDocumentClasses } from '@rgrmdesign/rgrm-ds-core/root';
import '@rgrmdesign/rgrm-ds-css/root';

import type { Preview } from '@storybook/react-vite';
import React from 'react';

import { applyDocumentTheme, resolveTheme } from './applyTheme';
import { DocsThemeCanvas } from './DocsThemeCanvas';
import { setupThemeSync } from './themeSync';
import './preview.css';

applyRootDocumentClasses();
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
          'Introduction',
          'Guides',
          ['Getting started', 'Design principles', 'Governance'],
          'Typography',
          [
            'Heading',
            [
              'Overview',
              'React',
              ['Documentation', '*'],
              'CSS',
              ['Documentation', '*'],
              'Element',
              ['Documentation', '*'],
            ],
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
          'Actions',
          [
            'Button',
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
          'Foundations',
          [
            'Root',
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
          'Wrappers',
          [
            'Section',
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
    (Story, { globals, viewMode, parameters }) => {
      const theme = resolveTheme(globals.theme);
      const isFullscreen = parameters.layout === 'fullscreen';

      if (viewMode === 'docs') {
        return (
          <DocsThemeCanvas theme={theme} fullWidth={isFullscreen}>
            <Story />
          </DocsThemeCanvas>
        );
      }

      applyDocumentTheme(theme);

      return (
        <div className={isFullscreen ? 'rgrm-story rgrm-story--full' : 'rgrm-story'}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
