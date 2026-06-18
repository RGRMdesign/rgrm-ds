import '@rgrmdesign/rgrm-ds-css/badge';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { badgeArgTypes, badgeExamples, badgeFixtures, type BadgeStoryArgs } from './fixtures';
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
  render: ({ children }: BadgeStoryArgs) => (
    <p>
      <span className='rgrm-badge'>{children}</span>
    </p>
  ),
} satisfies Meta<BadgeStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: badgeFixtures.default,
};

export const Examples: Story = {
  parameters: {
    docs: {
      source: {
        code: badgeExamples.map((label) => `<span class="rgrm-badge">${label}</span>`).join('\n'),
      },
    },
  },
  render: () => (
    <p style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      {badgeExamples.map((label) => (
        <span key={label} className='rgrm-badge'>
          {label}
        </span>
      ))}
    </p>
  ),
};
