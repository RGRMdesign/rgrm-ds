import type { StackGap } from '@rgrmdesign/rgrm-ds-core/stack';

export type StackStoryArgs = {
  gap?: StackGap;
};

export const stackFixtures = {
  default: {
    gap: '-',
  },
  gapXs: {
    gap: 'xs',
  },
  gapSm: {
    gap: 'sm',
  },
  gapMd: {
    gap: 'md',
  },
  gapLg: {
    gap: 'lg',
  },
  gapXl: {
    gap: 'xl',
  },
} satisfies Record<string, StackStoryArgs>;

const tableNoDefault = { defaultValue: { summary: null } } as const;

const stackGapControl = {
  control: 'select' as const,
  options: ['-', 'xs', 'sm', 'md', 'lg', 'xl'],
};

export const stackArgTypes = {
  gap: {
    ...stackGapControl,
    description: 'Vertical gap between children (`--rgrm-scale-space-*`).',
    table: {
      type: { summary: 'StackGap', detail: "'-' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'" },
      defaultValue: { summary: '-' },
    },
  },
};

export const stackReactArgTypes = {
  gap: stackArgTypes.gap,
  className: {
    control: 'text' as const,
    description: 'Extra CSS classes merged onto the root.',
    table: { type: { summary: 'string' }, ...tableNoDefault },
  },
  children: {
    control: false,
    description: 'Child elements laid out in a vertical column.',
    table: { type: { summary: 'ReactNode', required: true }, ...tableNoDefault },
  },
};

export const stackReactPropArgNames = ['gap', 'className', 'children'] as const;

export const stackCssClassArgTypes = {
  '.rgrm-stack': {
    control: false,
    description: 'Vertical flex column.',
    table: { type: { summary: 'class', required: true }, ...tableNoDefault },
  },
  '.rgrm-stack--gap-xs': {
    control: false,
    description: 'Extra-small gap (`--rgrm-scale-space-1`).',
    table: { type: { summary: 'class modifier' }, ...tableNoDefault },
  },
  '.rgrm-stack--gap-sm': {
    control: false,
    description: 'Small gap (`--rgrm-scale-space-3`).',
    table: { type: { summary: 'class modifier' }, ...tableNoDefault },
  },
  '.rgrm-stack--gap-md': {
    control: false,
    description: 'Medium gap (`--rgrm-scale-space-4`).',
    table: { type: { summary: 'class modifier' }, ...tableNoDefault },
  },
  '.rgrm-stack--gap-lg': {
    control: false,
    description: 'Large gap (`--rgrm-scale-space-6`).',
    table: { type: { summary: 'class modifier' }, ...tableNoDefault },
  },
  '.rgrm-stack--gap-xl': {
    control: false,
    description: 'Extra-large gap (`--rgrm-scale-space-8`).',
    table: { type: { summary: 'class modifier' }, ...tableNoDefault },
  },
};

export const stackCssClassArgNames = [
  '.rgrm-stack',
  '.rgrm-stack--gap-xs',
  '.rgrm-stack--gap-sm',
  '.rgrm-stack--gap-md',
  '.rgrm-stack--gap-lg',
  '.rgrm-stack--gap-xl',
] as const;

export const stackElementArgTypes = {
  gap: {
    ...stackGapControl,
    description: 'HTML attribute on `<rgrm-stack>`.',
    table: {
      type: { summary: 'string', detail: "'-' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'" },
      defaultValue: { summary: '-' },
    },
  },
};

export const stackElementAttributeArgNames = ['gap'] as const;

export const disableDocgenExtractArgTypes = () => ({});
