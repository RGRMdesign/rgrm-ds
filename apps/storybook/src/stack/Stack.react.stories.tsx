import { Button, Heading, Paragraph, Stack } from '@rgrmdesign/rgrm-ds-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  disableDocgenExtractArgTypes,
  stackFixtures,
  stackReactArgTypes,
  type StackStoryArgs,
} from './fixtures';
import { stackDocsSource, stackReactUsageSnippet } from './snippets';

const meta = {
  title: 'Wrappers/Stack/React',
  parameters: {
    docs: {
      description: {
        component:
          'React wrapper via `@rgrmdesign/rgrm-ds-react`. Loads `@rgrmdesign/rgrm-ds-css` automatically. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: stackDocsSource(stackReactUsageSnippet),
      extractArgTypes: disableDocgenExtractArgTypes,
    },
  },
  component: Stack,
  argTypes: stackReactArgTypes,
  render: ({ gap }: StackStoryArgs) => (
    <Stack gap={gap}>
      <Heading level={2}>Stack title</Heading>
      <Paragraph>Body copy in a vertical stack.</Paragraph>
      <Button>Action</Button>
    </Stack>
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
