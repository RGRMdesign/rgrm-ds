import '@rgrmdesign/rgrm-ds-elements/button';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { createElement } from 'react';

import { buttonElementArgTypes, buttonFixtures, type ButtonStoryArgs } from './fixtures';
import { buttonDocsSource, buttonElementUsageSnippet } from './snippets';

const meta = {
  title: 'Actions/Button/Element',
  parameters: {
    docs: {
      description: {
        component:
          'Web component via `@rgrmdesign/rgrm-ds-elements/button` (`<rgrm-button>`). Loads `@rgrmdesign/rgrm-ds-css/button` on import. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: buttonDocsSource(buttonElementUsageSnippet),
    },
  },
  argTypes: buttonElementArgTypes,
  render: ({ variant, children }: ButtonStoryArgs) =>
    createElement('rgrm-button', variant ? { variant } : {}, children),
} satisfies Meta<ButtonStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: buttonFixtures.primary,
};
