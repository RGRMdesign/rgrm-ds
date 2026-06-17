import '@rgrmdesign/rgrm-ds-css/divider';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { dividerCssClassArgTypes, dividerFixtures, type DividerStoryArgs } from './fixtures';
import { dividerCssUsageSnippet, dividerDocsSource } from './snippets';

const meta = {
  title: 'Content/Divider/CSS',
  parameters: {
    docs: {
      description: {
        component:
          'Vanilla HTML via `@rgrmdesign/rgrm-ds-css/divider`. Apply `.rgrm-divider` to a native `<hr>`. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: dividerDocsSource(dividerCssUsageSnippet),
    },
  },
  argTypes: dividerCssClassArgTypes,
  render: () => (
    <>
      <p>Content before the divider.</p>
      <hr className='rgrm-divider' />
      <p>Content after the divider.</p>
    </>
  ),
} satisfies Meta<DividerStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: dividerFixtures.default,
};
