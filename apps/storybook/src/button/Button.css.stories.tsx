import '@rgrmdesign/rgrm-ds-css/button';

import { buttonClassNames } from '@rgrmdesign/rgrm-ds-core/button';
import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  buttonArgTypes,
  buttonCssClassArgTypes,
  buttonFixtures,
  type ButtonStoryArgs,
} from './fixtures';
import { buttonCssUsageSnippet, buttonDocsSource } from './snippets';

const meta = {
  title: 'Actions/Button/CSS',
  parameters: {
    docs: {
      description: {
        component:
          'Vanilla HTML via `@rgrmdesign/rgrm-ds-css/button`. Apply `.rgrm-button` plus a variant modifier. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: buttonDocsSource(buttonCssUsageSnippet),
    },
  },
  argTypes: {
    ...buttonArgTypes,
    ...buttonCssClassArgTypes,
  },
  render: ({ variant, children }: ButtonStoryArgs) => (
    <button type="button" className={buttonClassNames(variant)}>
      {children}
    </button>
  ),
} satisfies Meta<ButtonStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: buttonFixtures.primary,
};
