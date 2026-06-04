import { Paragraph } from '@rgrmdesign/paragraph-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { disableDocgenExtractArgTypes, paragraphFixtures, paragraphReactArgTypes } from './fixtures';
import { paragraphDocsSource, paragraphReactUsageSnippet } from './snippets';

const meta = {
  title: 'Typography/Paragraph/React',
  component: Paragraph,
  parameters: {
    docs: {
      description: {
        component:
          'React wrapper via `@rgrmdesign/paragraph-react`. Loads `@rgrmdesign/paragraph-css` automatically. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: paragraphDocsSource(paragraphReactUsageSnippet),
      extractArgTypes: disableDocgenExtractArgTypes,
    },
  },
  argTypes: paragraphReactArgTypes,
} satisfies Meta<typeof Paragraph>;

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
