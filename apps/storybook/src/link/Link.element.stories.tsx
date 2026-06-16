import '@rgrmdesign/rgrm-ds-elements/link';

import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  disableDocgenExtractArgTypes,
  linkElementArgTypes,
  linkFixtures,
  type LinkStoryArgs,
} from './fixtures';
import { linkDocsSource, linkElementUsageSnippet } from './snippets';

const meta = {
  title: 'Content/Link/Web Components',
  parameters: {
    docs: {
      description: {
        component:
          'Web component via `@rgrmdesign/rgrm-ds-elements/link`. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: linkDocsSource(linkElementUsageSnippet),
      extractArgTypes: disableDocgenExtractArgTypes,
    },
  },
  argTypes: linkElementArgTypes,
  render: ({ href, children }: LinkStoryArgs) => (
    <p>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <rgrm-link href={href}>{children}</rgrm-link>
    </p>
  ),
} satisfies Meta<LinkStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: linkFixtures.default,
};
