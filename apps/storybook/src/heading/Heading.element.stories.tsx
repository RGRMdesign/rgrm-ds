import '@rgrmdesign/rgrm-ds-elements/heading';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { createElement } from 'react';

import { headingElementArgTypes, headingFixtures, type HeadingStoryArgs } from './fixtures';
import { headingDocsSource, headingElementUsageSnippet } from './snippets';

const meta = {
  title: 'Typography/Heading/Element',
  parameters: {
    docs: {
      description: {
        component:
          'Web component via `@rgrmdesign/rgrm-ds-elements/heading` (`<rgrm-heading>`). Loads `@rgrmdesign/rgrm-ds-css/heading` on import. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: headingDocsSource(headingElementUsageSnippet),
    },
  },
  argTypes: headingElementArgTypes,
  render: ({ level, appearance, children }: HeadingStoryArgs) =>
    createElement(
      'rgrm-heading',
      {
        ...(level ? { level } : {}),
        ...(appearance ? { appearance } : {}),
      },
      children,
    ),
} satisfies Meta<HeadingStoryArgs>;

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
