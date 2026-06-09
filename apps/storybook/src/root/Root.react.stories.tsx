import { Root } from '@rgrmdesign/rgrm-ds-react/root';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { disableDocgenExtractArgTypes, rootFixtures, rootReactArgTypes } from './fixtures';
import { rootDocsSource, rootReactUsageSnippet } from './snippets';

const meta = {
  title: 'Foundations/Root/React',
  component: Root,
  parameters: {
    docs: {
      description: {
        component:
          'React wrapper via `@rgrmdesign/rgrm-ds-react/root`. Loads `@rgrmdesign/rgrm-ds-css/root` and activates document styles on mount. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: rootDocsSource(rootReactUsageSnippet),
      extractArgTypes: disableDocgenExtractArgTypes,
    },
  },
  argTypes: rootReactArgTypes,
  render: ({ children }) => (
    <Root>
      <p>{children}</p>
    </Root>
  ),
} satisfies Meta<{ children: string }>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: rootFixtures.default,
};
