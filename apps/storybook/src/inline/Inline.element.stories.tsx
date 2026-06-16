import '@rgrmdesign/rgrm-ds-elements/button';
import '@rgrmdesign/rgrm-ds-elements/inline';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { createElement } from 'react';

import { inlineElementArgTypes, inlineFixtures, type InlineStoryArgs } from './fixtures';
import { inlineDocsSource, inlineElementUsageSnippet } from './snippets';

function demoButton(label: string) {
  return createElement('rgrm-button', { variant: 'primary' }, label);
}

const meta = {
  title: 'Wrappers/Inline/Element',
  parameters: {
    docs: {
      description: {
        component:
          'Web component via `@rgrmdesign/rgrm-ds-elements/inline` (`<rgrm-inline>`). Loads `@rgrmdesign/rgrm-ds-css/inline` on import. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: inlineDocsSource(inlineElementUsageSnippet),
    },
  },
  argTypes: inlineElementArgTypes,
  render: ({ gap }: InlineStoryArgs) =>
    createElement(
      'rgrm-inline',
      { gap: gap === '-' ? undefined : gap },
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
