import '@rgrmdesign/rgrm-ds-css/link';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { linkArgTypes, linkFixtures, type LinkStoryArgs } from './fixtures';
import { linkCssUsageSnippet, linkDocsSource } from './snippets';

const meta = {
  title: 'Content/Link/CSS',
  parameters: {
    docs: {
      description: {
        component:
          'Vanilla HTML via `@rgrmdesign/rgrm-ds-css/link`. Apply `.rgrm-link` to a native `<a>`. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: linkDocsSource(linkCssUsageSnippet),
    },
  },
  argTypes: linkArgTypes,
  render: ({ href, children }: LinkStoryArgs) => (
    <p>
      <a className='rgrm-link' href={href}>
        {children}
      </a>
    </p>
  ),
} satisfies Meta<LinkStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: linkFixtures.default,
};
