import '@rgrmdesign/rgrm-ds-css/button';
import '@rgrmdesign/rgrm-ds-css/heading';
import '@rgrmdesign/rgrm-ds-css/paragraph';
import '@rgrmdesign/rgrm-ds-css/stack';

import { BUTTON_LABEL_CLASS, buttonClassNames } from '@rgrmdesign/rgrm-ds-core/button';
import { headingClassNames } from '@rgrmdesign/rgrm-ds-core/heading';
import { paragraphClassNames } from '@rgrmdesign/rgrm-ds-core/paragraph';
import { stackClassNames } from '@rgrmdesign/rgrm-ds-core/stack';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { createElement } from 'react';

import {
  stackArgTypes,
  stackCssClassArgTypes,
  stackFixtures,
  type StackStoryArgs,
} from './fixtures';
import { stackCssUsageSnippet, stackDocsSource } from './snippets';

const meta = {
  title: 'Wrappers/Stack/CSS',
  parameters: {
    docs: {
      description: {
        component:
          'Vanilla HTML via `@rgrmdesign/rgrm-ds-css/stack`. Apply `.rgrm-stack` and optional gap modifiers. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: stackDocsSource(stackCssUsageSnippet),
    },
  },
  argTypes: {
    ...stackArgTypes,
    ...stackCssClassArgTypes,
  },
  render: ({ gap }: StackStoryArgs) =>
    createElement(
      'div',
      { className: stackClassNames({ gap }) },
      createElement('h2', { className: headingClassNames(2) }, 'Stack title'),
      createElement('p', { className: paragraphClassNames() }, 'Body copy in a vertical stack.'),
      createElement(
        'button',
        { type: 'button', className: buttonClassNames('primary') },
        createElement('span', { className: BUTTON_LABEL_CLASS }, 'Action'),
      ),
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
