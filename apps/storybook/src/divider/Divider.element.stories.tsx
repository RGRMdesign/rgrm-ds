import '@rgrmdesign/rgrm-ds-elements/divider';

import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  disableDocgenExtractArgTypes,
  dividerElementAttributeArgNames,
  dividerFixtures,
  type DividerStoryArgs,
} from './fixtures';
import { dividerDocsSource, dividerElementUsageSnippet } from './snippets';

const meta = {
  title: 'Content/Divider/Web Components',
  parameters: {
    docs: {
      description: {
        component:
          'Web component via `@rgrmdesign/rgrm-ds-elements/divider`. Renders an inner native `<hr>` with `.rgrm-divider`.',
      },
      source: dividerDocsSource(dividerElementUsageSnippet),
      extractArgTypes: disableDocgenExtractArgTypes,
    },
  },
  argTypes: {},
  render: () => (
    <>
      <p>Content before the divider.</p>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <rgrm-divider />
      <p>Content after the divider.</p>
    </>
  ),
} satisfies Meta<DividerStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: dividerFixtures.default,
  parameters: {
    controls: { include: dividerElementAttributeArgNames },
  },
};
