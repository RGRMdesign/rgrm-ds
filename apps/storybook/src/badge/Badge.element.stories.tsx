import '@rgrmdesign/rgrm-ds-elements/badge';

import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  badgeArgTypes,
  badgeFixtures,
  disableDocgenExtractArgTypes,
  type BadgeStoryArgs,
} from './fixtures';
import { badgeDocsSource, badgeElementUsageSnippet } from './snippets';

const meta = {
  title: 'Content/Badge/Web Components',
  parameters: {
    docs: {
      description: {
        component:
          'Web component via `@rgrmdesign/rgrm-ds-elements/badge`. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: badgeDocsSource(badgeElementUsageSnippet),
      extractArgTypes: disableDocgenExtractArgTypes,
    },
  },
  argTypes: badgeArgTypes,
  render: ({ children }: BadgeStoryArgs) => (
    <p>
      Status: {/* eslint-disable-next-line react/no-unknown-property */}
      <rgrm-badge>{children}</rgrm-badge>
    </p>
  ),
} satisfies Meta<BadgeStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: badgeFixtures.default,
};
