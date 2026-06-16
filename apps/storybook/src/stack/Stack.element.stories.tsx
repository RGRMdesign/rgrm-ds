import '@rgrmdesign/rgrm-ds-elements/button';
import '@rgrmdesign/rgrm-ds-elements/heading';
import '@rgrmdesign/rgrm-ds-elements/paragraph';
import '@rgrmdesign/rgrm-ds-elements/stack';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { createElement } from 'react';

import {
  stackElementArgTypes,
  stackFixtures,
  type StackStoryArgs,
} from './fixtures';
import { stackDocsSource, stackElementUsageSnippet } from './snippets';

const meta = {
  title: 'Wrappers/Stack/Element',
  parameters: {
    docs: {
      description: {
        component:
          'Web component via `@rgrmdesign/rgrm-ds-elements/stack` (`<rgrm-stack>`). Loads `@rgrmdesign/rgrm-ds-css/stack` on import. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: stackDocsSource(stackElementUsageSnippet),
    },
  },
  argTypes: stackElementArgTypes,
  render: ({ gap }: StackStoryArgs) =>
    createElement(
      'rgrm-stack',
      { gap: gap === '-' ? undefined : gap },
      createElement('rgrm-heading', { level: '2' }, 'Stack title'),
      createElement('rgrm-paragraph', null, 'Body copy in a vertical stack.'),
      createElement('rgrm-button', { variant: 'primary' }, 'Action'),
    ),
} satisfies Meta<StackStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { name: 'No gap', args: stackFixtures.default };
export const GapXs: Story = { name: 'Gap: xs', args: stackFixtures.gapXs };
export const GapSm: Story = { name: 'Gap: sm', args: stackFixtures.gapSm };
export const GapMd: Story = { name: 'Gap: md', args: stackFixtures.gapMd };
export const GapLg: Story = { name: 'Gap: lg', args: stackFixtures.gapLg };
export const GapXl: Story = { name: 'Gap: xl', args: stackFixtures.gapXl };
