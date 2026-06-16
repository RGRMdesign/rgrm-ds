import { Link } from '@rgrmdesign/rgrm-ds-react/link';
import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  disableDocgenExtractArgTypes,
  linkFixtures,
  linkReactArgTypes,
  type LinkStoryArgs,
} from './fixtures';
import { linkDocsSource, linkReactUsageSnippet } from './snippets';

const meta = {
  title: 'Content/Link/React',
  parameters: {
    docs: {
      description: {
        component:
          'React wrapper via `@rgrmdesign/rgrm-ds-react/link`. Loads `@rgrmdesign/rgrm-ds-css` automatically. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: linkDocsSource(linkReactUsageSnippet),
      extractArgTypes: disableDocgenExtractArgTypes,
    },
  },
  component: Link,
  argTypes: linkReactArgTypes,
  render: ({ href, children }: LinkStoryArgs) => (
    <p>
      <Link href={href}>{children}</Link>
    </p>
  ),
} satisfies Meta<LinkStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: linkFixtures.default,
};
