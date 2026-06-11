import '@rgrmdesign/rgrm-ds-tokens';
import '@rgrmdesign/rgrm-ds-css/fonts';
import { applyRootDocumentClasses } from '@rgrmdesign/rgrm-ds-core/root';
import '@rgrmdesign/rgrm-ds-css/root';

import type { Preview } from '@storybook/react-vite';
import React from 'react';

import { applyDocumentTheme, resolveTheme } from './applyTheme';
import { DocsThemeCanvas } from './DocsThemeCanvas';
import { registerRgrmElements } from './registerElements';
import { setupThemeSync } from './themeSync';
import './preview.css';

applyRootDocumentClasses();
registerRgrmElements();
setupThemeSync();

const preview: Preview = {
  parameters: {
    a11y: {
      // Story canvas + docs previews; includes color-contrast (WCAG 2.x AA via axe).
      context: 'body',
      config: {
        rules: [{ id: 'region', enabled: false }],
      },
    },
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
          ['Getting started', 'Design principles', 'Customization', 'Governance'],
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

      return <Story />;
    },
  ],
};

export default preview;
