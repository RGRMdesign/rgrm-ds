import '@rgrmdesign/rgrm-ds-elements/root';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { createElement } from 'react';

import { rootArgTypes, rootFixtures, type RootStoryArgs } from './fixtures';
import { rootDocsSource, rootElementUsageSnippet } from './snippets';

const meta = {
  title: 'Foundations/Root/Element',
  parameters: {
    docs: {
      description: {
        component:
          'Web component via `@rgrmdesign/rgrm-ds-elements/root` (`<rgrm-root>`). Loads `@rgrmdesign/rgrm-ds-css/root` on import. Place once in the document; requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: rootDocsSource(rootElementUsageSnippet),
    },
  },
  argTypes: rootArgTypes,
  render: ({ children }: RootStoryArgs) => (
    <>
      {createElement('rgrm-root')}
      <p>{children}</p>
    </>
  ),
} satisfies Meta<RootStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: rootFixtures.default,
};
