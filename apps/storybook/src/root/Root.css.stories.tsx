import '@rgrmdesign/rgrm-ds-css/root';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { rootArgTypes, rootCssClassArgTypes, rootFixtures, type RootStoryArgs } from './fixtures';
import { rootCssUsageSnippet, rootDocsSource } from './snippets';

const meta = {
  title: 'Foundations/Root/CSS',
  parameters: {
    docs: {
      description: {
        component:
          'Vanilla setup via `@rgrmdesign/rgrm-ds-css/root` and `applyRootDocumentClasses()` from `@rgrmdesign/rgrm-ds-core/root`. Adds `rgrm-root` to `<html>` and `<body>`. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: rootDocsSource(rootCssUsageSnippet),
    },
  },
  argTypes: {
    ...rootArgTypes,
    ...rootCssClassArgTypes,
  },
  render: ({ children }: RootStoryArgs) => <p>{children}</p>,
} satisfies Meta<RootStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: rootFixtures.default,
};
