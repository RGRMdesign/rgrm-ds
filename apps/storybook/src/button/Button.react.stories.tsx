import { Button } from '@rgrmdesign/rgrm-ds-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { buttonFixtures, buttonReactArgTypes, disableDocgenExtractArgTypes } from './fixtures';
import { buttonDocsSource, buttonReactUsageSnippet } from './snippets';

const meta = {
  title: 'Actions/Button/React',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'React wrapper via `@rgrmdesign/rgrm-ds-react`. Loads `@rgrmdesign/rgrm-ds-css` automatically. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: buttonDocsSource(buttonReactUsageSnippet),
      extractArgTypes: disableDocgenExtractArgTypes,
    },
  },
  argTypes: buttonReactArgTypes,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: buttonFixtures.primary,
};
