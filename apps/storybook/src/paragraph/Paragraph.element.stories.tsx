import '@rgrmdesign/rgrm-ds-elements/paragraph';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { createElement } from 'react';

import { paragraphElementArgTypes, paragraphFixtures, type ParagraphStoryArgs } from './fixtures';
import { paragraphDocsSource, paragraphElementUsageSnippet } from './snippets';

const meta = {
  title: 'Typography/Paragraph/Element',
  parameters: {
    docs: {
      description: {
        component:
          'Web component via `@rgrmdesign/rgrm-ds-elements/paragraph` (`<rgrm-paragraph>`). Loads `@rgrmdesign/rgrm-ds-css/paragraph` on import. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: paragraphDocsSource(paragraphElementUsageSnippet),
    },
  },
  argTypes: paragraphElementArgTypes,
  render: ({ size, children }: ParagraphStoryArgs) =>
    createElement('rgrm-paragraph', size ? { size } : {}, children),
} satisfies Meta<ParagraphStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: paragraphFixtures.default,
};

export const Large: Story = {
  args: paragraphFixtures.large,
};

export const Small: Story = {
  args: paragraphFixtures.small,
};
