import '@rgrmdesign/rgrm-ds-css/badge';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { badgeArgTypes, badgeFixtures, type BadgeStoryArgs } from './fixtures';
import { badgeCssUsageSnippet, badgeDocsSource } from './snippets';

const meta = {
  title: 'Content/Badge/CSS',
  parameters: {
    docs: {
      description: {
        component:
          'Vanilla HTML via `@rgrmdesign/rgrm-ds-css/badge`. Apply `.rgrm-badge` to a native `<span>`. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: badgeDocsSource(badgeCssUsageSnippet),
    },
  },
  argTypes: badgeArgTypes,
  render: ({ children }: BadgeStoryArgs) => <span className='rgrm-badge'>{children}</span>,
} satisfies Meta<BadgeStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: badgeFixtures.default,
};
