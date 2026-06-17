import { Divider } from '@rgrmdesign/rgrm-ds-react/divider';
import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  disableDocgenExtractArgTypes,
  dividerFixtures,
  dividerReactArgTypes,
  type DividerStoryArgs,
} from './fixtures';
import { dividerDocsSource, dividerReactUsageSnippet } from './snippets';

const meta = {
  title: 'Content/Divider/React',
  parameters: {
    docs: {
      description: {
        component:
          'React wrapper via `@rgrmdesign/rgrm-ds-react/divider`. Loads `@rgrmdesign/rgrm-ds-css` automatically and renders a native `<hr>`.',
      },
      source: dividerDocsSource(dividerReactUsageSnippet),
      extractArgTypes: disableDocgenExtractArgTypes,
    },
  },
  component: Divider,
  argTypes: dividerReactArgTypes,
  render: ({ className }: DividerStoryArgs) => (
    <>
      <p>Content before the divider.</p>
      <Divider className={className} />
      <p>Content after the divider.</p>
    </>
  ),
} satisfies Meta<DividerStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: dividerFixtures.default,
};
