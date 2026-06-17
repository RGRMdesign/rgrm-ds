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
          'Content',
          [
            'Link',
            [
              'Overview',
              'CSS',
              ['Documentation', '*'],
              'React',
              ['Documentation', '*'],
              'Web Components',
              ['Documentation', '*'],
            ],
            'Badge',
            [
              'Overview',
              'CSS',
              ['Documentation', '*'],
              'React',
              ['Documentation', '*'],
              'Web Components',
              ['Documentation', '*'],
            ],
          ],
          'Typography',
          [
            'Heading',
            [
              'Overview',
              'CSS',
              ['Documentation', '*'],
              'React',
              ['Documentation', '*'],
              'Web Components',
              ['Documentation', '*'],
            ],
            'Paragraph',
            [
              'Overview',
              'CSS',
              ['Documentation', '*'],
              'React',
              ['Documentation', '*'],
              'Web Components',
              ['Documentation', '*'],
            ],
          ],
          'Actions',
          [
            'Button',
            [
              'Overview',
              'CSS',
              ['Documentation', '*'],
              'React',
              ['Documentation', '*'],
              'Web Components',
              ['Documentation', '*'],
            ],
          ],
          'Foundations',
          [
            'Root',
            [
              'Overview',
              'CSS',
              ['Documentation', '*'],
              'React',
              ['Documentation', '*'],
              'Web Components',
              ['Documentation', '*'],
            ],
          ],
          'Wrappers',
          [
            'Section',
            [
              'Overview',
              'CSS',
              ['Documentation', '*'],
              'React',
              ['Documentation', '*'],
              'Web Components',
              ['Documentation', '*'],
            ],
            'Inline',
            [
              'Overview',
              'CSS',
              ['Documentation', '*'],
              'React',
              ['Documentation', '*'],
              'Web Components',
              ['Documentation', '*'],
            ],
            'Stack',
            [
              'Overview',
              'CSS',
              ['Documentation', '*'],
              'React',
              ['Documentation', '*'],
              'Web Components',
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
