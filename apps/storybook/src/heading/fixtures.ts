import type { HeadingLevel } from '@rgrmdesign/rgrm-ds-core/heading';

export type HeadingStoryArgs = {
  level?: HeadingLevel;
  children: string;
};

export const headingFixtures = {
  display: {
    level: 'display',
    children: 'Display heading',
  },
  h1: {
    level: 1,
    children: 'Heading level 1',
  },
  h2: {
    level: 2,
    children: 'Heading level 2',
  },
  h3: {
    level: 3,
    children: 'Heading level 3',
  },
  h4: {
    level: 4,
    children: 'Heading level 4',
  },
  h5: {
    level: 5,
    children: 'Heading level 5',
  },
  h6: {
    level: 6,
    children: 'Heading level 6',
  },
} satisfies Record<string, HeadingStoryArgs>;

/**
 * Storybook `<ArgTypes />` docs table columns (no custom table):
 * - Name → arg key
 * - Description → `description` (+ Type block from `table.type` below it)
 * - Default → `table.defaultValue` (omit or `summary: null` when there is no default)
 * Control column only appears on interactive canvases, not in docs ArgTypes.
 */
const tableNoDefault = { defaultValue: { summary: null } } as const;

const headingLevelArgType = {
  control: false,
  table: {
    type: {
      summary: 'HeadingLevel',
      detail: "1 | 2 | 3 | 4 | 5 | 6 | 'display'",
    },
    ...tableNoDefault,
  },
};

const headingChildrenArgType = {
  control: 'text' as const,
  description: 'Heading text content.',
  table: {
    type: { summary: 'string', required: true },
    ...tableNoDefault,
  },
};

/** Story + docs argTypes for CSS / Element demos. */
export const headingArgTypes = {
  level: {
    description: 'Heading level; sets the rendered tag and typography scale.',
    ...headingLevelArgType,
  },
  children: headingChildrenArgType,
};

/** React docs for `<Heading>`. */
export const headingReactArgTypes = {
  level: {
    description:
      'Heading level (1–6). Sets both the rendered tag and the typography scale. Defaults to 2.',
    ...headingLevelArgType,
  },
  className: {
    description: 'Extra CSS classes merged after the level modifier.',
    control: 'text' as const,
    table: {
      type: { summary: 'string' },
      ...tableNoDefault,
    },
  },
  children: {
    description: 'Heading text content.',
    control: 'text' as const,
    table: {
      type: { summary: 'ReactNode', required: true },
      ...tableNoDefault,
    },
  },
};

export const headingReactPropArgNames = ['level', 'className', 'children'] as const;

/** Docs-only rows for @rgrmdesign/rgrm-ds-css (shown via `<ArgTypes include={...} />`). */
export const headingCssClassArgTypes = {
  '.rgrm-heading': {
    control: false,
    description: 'Base heading styles (shared across all levels).',
    table: {
      type: { summary: 'class', required: true },
      ...tableNoDefault,
    },
  },
  '.rgrm-heading--display': {
    control: false,
    description: 'Oversized display / hero scale.',
    table: {
      type: { summary: 'class modifier' },
      ...tableNoDefault,
    },
  },
  '.rgrm-heading--h1': {
    control: false,
    description: 'Level 1 size.',
    table: {
      type: { summary: 'class modifier' },
      ...tableNoDefault,
    },
  },
  '.rgrm-heading--h2': {
    control: false,
    description: 'Level 2 size.',
    table: {
      type: { summary: 'class modifier' },
      ...tableNoDefault,
    },
  },
  '.rgrm-heading--h3': {
    control: false,
    description: 'Level 3 size.',
    table: {
      type: { summary: 'class modifier' },
      ...tableNoDefault,
    },
  },
  '.rgrm-heading--h4': {
    control: false,
    description: 'Level 4 size.',
    table: {
      type: { summary: 'class modifier' },
      ...tableNoDefault,
    },
  },
  '.rgrm-heading--h5': {
    control: false,
    description: 'Level 5 size.',
    table: {
      type: { summary: 'class modifier' },
      ...tableNoDefault,
    },
  },
  '.rgrm-heading--h6': {
    control: false,
    description: 'Level 6 size.',
    table: {
      type: { summary: 'class modifier' },
      ...tableNoDefault,
    },
  },
};

const headingElementLevelArgType = {
  control: false,
  table: {
    type: {
      summary: 'string',
      detail: "1 | 2 | 3 | 4 | 5 | 6 | 'display'",
    },
    ...tableNoDefault,
  },
};

/** Element docs: `level` is an HTML attribute on `<rgrm-heading>`. */
export const headingElementArgTypes = {
  level: {
    description: 'HTML attribute on `<rgrm-heading>`.',
    ...headingElementLevelArgType,
  },
  children: {
    ...headingChildrenArgType,
    description: 'Text content (light DOM children).',
  },
};

export const headingCssClassArgNames = [
  '.rgrm-heading',
  '.rgrm-heading--display',
  '.rgrm-heading--h1',
  '.rgrm-heading--h2',
  '.rgrm-heading--h3',
  '.rgrm-heading--h4',
  '.rgrm-heading--h5',
  '.rgrm-heading--h6',
] as const;

export const headingElementAttributeArgNames = ['level'] as const;

/** Skip react-docgen merge so extracted enum metadata does not override the Props table. */
export const disableDocgenExtractArgTypes = () => ({});
