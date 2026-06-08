import { Heading } from '@rgrmdesign/rgrm-ds-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { disableDocgenExtractArgTypes, headingFixtures, headingReactArgTypes } from './fixtures';
import { headingDocsSource, headingReactUsageSnippet } from './snippets';

const meta = {
  title: 'Typography/Heading/React',
  component: Heading,
  parameters: {
    docs: {
      description: {
        component:
          'React wrapper via `@rgrmdesign/rgrm-ds-react`. Loads `@rgrmdesign/rgrm-ds-css` automatically. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: headingDocsSource(headingReactUsageSnippet),
      extractArgTypes: disableDocgenExtractArgTypes,
    },
  },
  argTypes: headingReactArgTypes,
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Display: Story = {
  name: 'Display',
  args: headingFixtures.display,
};

export const H1: Story = {
  name: 'Appearance 1',
  args: headingFixtures.h1,
};

export const H2: Story = {
  name: 'Appearance 2',
  args: headingFixtures.h2,
};

export const H3: Story = {
  name: 'Appearance 3',
  args: headingFixtures.h3,
};

export const H4: Story = {
  name: 'Appearance 4',
  args: headingFixtures.h4,
};

export const H5: Story = {
  name: 'Appearance 5',
  args: headingFixtures.h5,
};

export const H6: Story = {
  name: 'Appearance 6',
  args: headingFixtures.h6,
};
