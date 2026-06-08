import type { HeadingAppearance, HeadingLevel } from '@rgrmdesign/rgrm-ds-core/heading';

export type HeadingStoryArgs = {
  level?: HeadingLevel;
  appearance?: HeadingAppearance;
  children: string;
};

export const headingFixtures = {
  display: {
    level: 1,
    appearance: 'display',
    children: 'Display heading',
  },
  h1: {
    level: 1,
    children: 'Appearance 1',
  },
  h2: {
    level: 2,
    children: 'Appearance 2',
  },
  h3: {
    level: 3,
    children: 'Appearance 3',
  },
  h4: {
    level: 4,
    children: 'Appearance 4',
  },
  h5: {
    level: 5,
    children: 'Appearance 5',
  },
  h6: {
    level: 6,
    children: 'Appearance 6',
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
      detail: '1 | 2 | 3 | 4 | 5 | 6',
    },
    ...tableNoDefault,
  },
};

const headingAppearanceArgType = {
  control: false,
  table: {
    type: {
      summary: 'HeadingAppearance',
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
    description: 'Semantic heading level; sets the rendered `<h1>`–`<h6>` element.',
    ...headingLevelArgType,
  },
  appearance: {
    description: 'Visual scale; defaults to `level` when omitted.',
    ...headingAppearanceArgType,
  },
  children: headingChildrenArgType,
};

/** React docs for `<Heading>`. */
export const headingReactArgTypes = {
  level: {
    description: 'Semantic heading level; sets the rendered `<h1>`–`<h6>` element. Defaults to 2.',
    ...headingLevelArgType,
  },
  appearance: {
    description: 'Visual scale; defaults to `level` when omitted.',
    ...headingAppearanceArgType,
  },
  className: {
    description: 'Extra CSS classes merged after the appearance modifier.',
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

export const headingReactPropArgNames = ['level', 'appearance', 'className', 'children'] as const;

/** Docs-only rows for @rgrmdesign/rgrm-ds-css (shown via `<ArgTypes include={...} />`). */
export const headingCssClassArgTypes = {
  '.rgrm-heading': {
    control: false,
    description: 'Base heading styles (shared across all appearances).',
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
    description: 'Appearance scale 1.',
    table: {
      type: { summary: 'class modifier' },
      ...tableNoDefault,
    },
  },
  '.rgrm-heading--h2': {
    control: false,
    description: 'Appearance scale 2.',
    table: {
      type: { summary: 'class modifier' },
      ...tableNoDefault,
    },
  },
  '.rgrm-heading--h3': {
    control: false,
    description: 'Appearance scale 3.',
    table: {
      type: { summary: 'class modifier' },
      ...tableNoDefault,
    },
  },
  '.rgrm-heading--h4': {
    control: false,
    description: 'Appearance scale 4.',
    table: {
      type: { summary: 'class modifier' },
      ...tableNoDefault,
    },
  },
  '.rgrm-heading--h5': {
    control: false,
    description: 'Appearance scale 5.',
    table: {
      type: { summary: 'class modifier' },
      ...tableNoDefault,
    },
  },
  '.rgrm-heading--h6': {
    control: false,
    description: 'Appearance scale 6.',
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
      detail: '1 | 2 | 3 | 4 | 5 | 6',
    },
    ...tableNoDefault,
  },
};

const headingElementAppearanceArgType = {
  control: false,
  table: {
    type: {
      summary: 'string',
      detail: "1 | 2 | 3 | 4 | 5 | 6 | 'display'",
    },
    ...tableNoDefault,
  },
};

/** Element docs: `level` and `appearance` are HTML attributes on `<rgrm-heading>`. */
export const headingElementArgTypes = {
  level: {
    description: 'Semantic heading level; sets the inner `<h1>`–`<h6>` element.',
    ...headingElementLevelArgType,
  },
  appearance: {
    description: 'Visual scale; defaults to `level` when omitted.',
    ...headingElementAppearanceArgType,
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

export const headingElementAttributeArgNames = ['level', 'appearance'] as const;

/** Skip react-docgen merge so extracted enum metadata does not override the Props table. */
export const disableDocgenExtractArgTypes = () => ({});
