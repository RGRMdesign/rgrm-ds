import '@rgrmdesign/rgrm-ds-css/heading';

import { headingClassNames } from '@rgrmdesign/rgrm-ds-core/heading';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { createElement } from 'react';

import {
  headingArgTypes,
  headingCssClassArgTypes,
  headingFixtures,
  type HeadingStoryArgs,
} from './fixtures';
import { headingCssUsageSnippet, headingDocsSource } from './snippets';

const meta = {
  title: 'Typography/Heading/CSS',
  parameters: {
    docs: {
      description: {
        component:
          'Vanilla HTML via `@rgrmdesign/rgrm-ds-css/heading`. Apply `.rgrm-heading` plus an appearance modifier; pick the semantic `<h1>`–`<h6>` element separately. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: headingDocsSource(headingCssUsageSnippet),
    },
  },
  argTypes: {
    ...headingArgTypes,
    ...headingCssClassArgTypes,
  },
  render: ({ level, appearance, children }: HeadingStoryArgs) =>
    createElement(
      `h${level ?? 2}`,
      { className: headingClassNames(appearance ?? level ?? 2) },
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
