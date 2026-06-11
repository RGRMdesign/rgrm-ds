import '@rgrmdesign/rgrm-ds-css/paragraph';

import { paragraphClassNames } from '@rgrmdesign/rgrm-ds-core/paragraph';
import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  paragraphArgTypes,
  paragraphCssClassArgTypes,
  paragraphFixtures,
  type ParagraphStoryArgs,
} from './fixtures';
import { paragraphCssUsageSnippet, paragraphDocsSource } from './snippets';

const meta = {
  title: 'Typography/Paragraph/CSS',
  parameters: {
    docs: {
      description: {
        component:
          'Vanilla HTML via `@rgrmdesign/rgrm-ds-css/paragraph`. Apply `.rgrm-paragraph` and optional size modifiers. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: paragraphDocsSource(paragraphCssUsageSnippet),
    },
  },
  argTypes: {
    ...paragraphArgTypes,
    ...paragraphCssClassArgTypes,
  },
  render: ({ size, children }: ParagraphStoryArgs) => (
    <p className={paragraphClassNames(size)}>{children}</p>
  ),
} satisfies Meta<ParagraphStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: paragraphFixtures.default,
};

export const Large: Story = {
  args: paragraphFixtures.large,
};

export const Small: Story = {
  args: paragraphFixtures.small,
};
