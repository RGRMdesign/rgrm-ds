import type { InlineGap } from '@rgrmdesign/rgrm-ds-core/inline';

export type InlineStoryArgs = {
  gap?: InlineGap;
};

export const inlineFixtures = {
  default: {
    gap: '-',
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
} satisfies Record<string, InlineStoryArgs>;

const tableNoDefault = { defaultValue: { summary: null } } as const;

const inlineGapControl = {
  control: 'select' as const,
  options: ['-', 'sm', 'md', 'lg'],
};

export const inlineArgTypes = {
  gap: {
    ...inlineGapControl,
    description: 'Horizontal gap between children (`--rgrm-scale-space-*`).',
    table: {
      type: { summary: 'InlineGap', detail: "'-' | 'sm' | 'md' | 'lg'" },
      defaultValue: { summary: '-' },
    },
  },
};

export const inlineReactArgTypes = {
  gap: inlineArgTypes.gap,
  className: {
    control: 'text' as const,
    description: 'Extra CSS classes merged onto the root.',
    table: { type: { summary: 'string' }, ...tableNoDefault },
  },
  children: {
    control: false,
    description: 'Child elements laid out in a horizontal row.',
    table: { type: { summary: 'ReactNode', required: true }, ...tableNoDefault },
  },
};

export const inlineReactPropArgNames = ['gap', 'className', 'children'] as const;

export const inlineCssClassArgTypes = {
  '.rgrm-inline': {
    control: false,
    description: 'Horizontal flex row with wrap.',
    table: { type: { summary: 'class', required: true }, ...tableNoDefault },
  },
  '.rgrm-inline--gap-sm': {
    control: false,
    description: 'Small gap (`--rgrm-scale-space-3`).',
    table: { type: { summary: 'class modifier' }, ...tableNoDefault },
  },
  '.rgrm-inline--gap-md': {
    control: false,
    description: 'Medium gap (`--rgrm-scale-space-4`).',
    table: { type: { summary: 'class modifier' }, ...tableNoDefault },
  },
  '.rgrm-inline--gap-lg': {
    control: false,
    description: 'Large gap (`--rgrm-scale-space-6`).',
    table: { type: { summary: 'class modifier' }, ...tableNoDefault },
  },
};

export const inlineCssClassArgNames = [
  '.rgrm-inline',
  '.rgrm-inline--gap-sm',
  '.rgrm-inline--gap-md',
  '.rgrm-inline--gap-lg',
] as const;

export const inlineElementArgTypes = {
  gap: {
    ...inlineGapControl,
    description: 'HTML attribute on `<rgrm-inline>`.',
    table: {
      type: { summary: 'string', detail: "'-' | 'sm' | 'md' | 'lg'" },
      defaultValue: { summary: '-' },
    },
  },
};

export const inlineElementAttributeArgNames = ['gap'] as const;

export const disableDocgenExtractArgTypes = () => ({});
