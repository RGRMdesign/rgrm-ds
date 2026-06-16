import '@rgrmdesign/rgrm-ds-css/button';
import '@rgrmdesign/rgrm-ds-css/inline';

import { BUTTON_LABEL_CLASS, buttonClassNames } from '@rgrmdesign/rgrm-ds-core/button';
import { inlineClassNames } from '@rgrmdesign/rgrm-ds-core/inline';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { createElement } from 'react';

import {
  inlineArgTypes,
  inlineCssClassArgTypes,
  inlineFixtures,
  type InlineStoryArgs,
} from './fixtures';
import { inlineCssUsageSnippet, inlineDocsSource } from './snippets';

function demoButton(label: string) {
  return createElement(
    'button',
    { type: 'button', className: buttonClassNames('primary') },
    createElement('span', { className: BUTTON_LABEL_CLASS }, label),
  );
}

const meta = {
  title: 'Wrappers/Inline/CSS',
  parameters: {
    docs: {
      description: {
        component:
          'Vanilla HTML via `@rgrmdesign/rgrm-ds-css/inline`. Apply `.rgrm-inline` and optional gap modifiers. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: inlineDocsSource(inlineCssUsageSnippet),
    },
  },
  argTypes: {
    ...inlineArgTypes,
    ...inlineCssClassArgTypes,
  },
  render: ({ gap }: InlineStoryArgs) =>
    createElement(
      'div',
      { className: inlineClassNames({ gap }) },
      demoButton('One'),
      demoButton('Two'),
      demoButton('Three'),
    ),
} satisfies Meta<InlineStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { name: 'No gap', args: inlineFixtures.default };
export const GapSm: Story = { name: 'Gap: sm', args: inlineFixtures.gapSm };
export const GapMd: Story = { name: 'Gap: md', args: inlineFixtures.gapMd };
export const GapLg: Story = { name: 'Gap: lg', args: inlineFixtures.gapLg };
