import '@rgrmdesign/rgrm-ds-elements/badge';

import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  badgeExamples,
  badgeFixtures,
  badgeArgTypes,
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
      <rgrm-badge>{children}</rgrm-badge>
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
        code: badgeExamples.map((label) => `<rgrm-badge>${label}</rgrm-badge>`).join('\n'),
      },
    },
  },
  render: () => (
    <p style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      {badgeExamples.map((label) => (
        <rgrm-badge key={label}>{label}</rgrm-badge>
      ))}
    </p>
  ),
};
