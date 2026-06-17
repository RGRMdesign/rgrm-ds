import { Badge } from '@rgrmdesign/rgrm-ds-react/badge';
import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  badgeFixtures,
  badgeReactArgTypes,
  disableDocgenExtractArgTypes,
  type BadgeStoryArgs,
} from './fixtures';
import { badgeDocsSource, badgeReactUsageSnippet } from './snippets';

const meta = {
  title: 'Content/Badge/React',
  parameters: {
    docs: {
      description: {
        component:
          'React wrapper via `@rgrmdesign/rgrm-ds-react/badge`. Loads `@rgrmdesign/rgrm-ds-css` automatically. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: badgeDocsSource(badgeReactUsageSnippet),
      extractArgTypes: disableDocgenExtractArgTypes,
    },
  },
  component: Badge,
  argTypes: badgeReactArgTypes,
  render: ({ children }: BadgeStoryArgs) => <Badge>{children}</Badge>,
} satisfies Meta<BadgeStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: badgeFixtures.default,
};
