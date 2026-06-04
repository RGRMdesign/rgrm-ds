import { Paragraph } from '@rgrmdesign/paragraph-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Body typography via `@rgrmdesign/paragraph-react`. Loads `@rgrmdesign/paragraph-css` automatically. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: [undefined, 'small', 'large'],
      description: 'Display size; omit for main/body scale.',
    },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      'Default body paragraph. Typography scales with the design tokens.',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large lead paragraph.',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small paragraph for captions and fine print.',
  },
};
