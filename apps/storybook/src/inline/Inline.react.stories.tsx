import { Button, Inline } from '@rgrmdesign/rgrm-ds-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  disableDocgenExtractArgTypes,
  inlineFixtures,
  inlineReactArgTypes,
  type InlineStoryArgs,
} from './fixtures';
import { inlineDocsSource, inlineReactUsageSnippet } from './snippets';

const meta = {
  title: 'Wrappers/Inline/React',
  parameters: {
    docs: {
      description: {
        component:
          'React wrapper via `@rgrmdesign/rgrm-ds-react`. Loads `@rgrmdesign/rgrm-ds-css` automatically. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: inlineDocsSource(inlineReactUsageSnippet),
      extractArgTypes: disableDocgenExtractArgTypes,
    },
  },
  component: Inline,
  argTypes: inlineReactArgTypes,
  render: ({ gap }: InlineStoryArgs) => (
    <Inline gap={gap}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </Inline>
  ),
} satisfies Meta<InlineStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { name: 'No gap', args: inlineFixtures.default };
export const GapSm: Story = { name: 'Gap: sm', args: inlineFixtures.gapSm };
export const GapMd: Story = { name: 'Gap: md', args: inlineFixtures.gapMd };
export const GapLg: Story = { name: 'Gap: lg', args: inlineFixtures.gapLg };
