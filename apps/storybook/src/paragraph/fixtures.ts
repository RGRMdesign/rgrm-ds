import type { ParagraphSize } from '@rgrmdesign/rgrm-ds-core/paragraph';

export type ParagraphStoryArgs = {
  size?: ParagraphSize;
  children: string;
};

export const paragraphFixtures = {
  default: {
    children:
      'Default body paragraph. Typography scales with the design tokens.',
  },
  large: {
    size: 'large',
    children: 'Large lead paragraph.',
  },
  small: {
    size: 'small',
    children: 'Small paragraph for captions and fine print.',
  },
} satisfies Record<string, ParagraphStoryArgs>;

/**
 * Storybook `<ArgTypes />` docs table columns (no custom table):
 * - Name → arg key
 * - Description → `description` (+ Type block from `table.type` below it)
 * - Default → `table.defaultValue` (omit or `summary: null` when there is no default)
 * Control column only appears on interactive canvases, not in docs ArgTypes.
 */
const tableNoDefault = { defaultValue: { summary: null } } as const;

const paragraphSizeArgType = {
  control: false,
  table: {
    type: {
      summary: 'ParagraphSize',
      detail: "'small' | 'large'",
    },
    ...tableNoDefault,
  },
};

const paragraphChildrenArgType = {
  control: 'text' as const,
  description: 'Paragraph text content.',
  table: {
    type: { summary: 'string', required: true },
    ...tableNoDefault,
  },
};

/** Story + docs argTypes for CSS / Element demos. */
export const paragraphArgTypes = {
  size: {
    description: 'Size modifier; omit for main/body scale.',
    ...paragraphSizeArgType,
  },
  children: paragraphChildrenArgType,
};

/** React docs for `<Paragraph>`. */
export const paragraphReactArgTypes = {
  size: {
    description:
      'Typography scale. Omit the prop for the default main body style.',
    ...paragraphSizeArgType,
  },
  className: {
    description: 'Extra CSS classes merged after size modifiers.',
    control: 'text' as const,
    table: {
      type: { summary: 'string' },
      ...tableNoDefault,
    },
  },
  children: {
    description: 'Paragraph text content.',
    control: 'text' as const,
    table: {
      type: { summary: 'ReactNode', required: true },
      ...tableNoDefault,
    },
  },
};

export const paragraphReactPropArgNames = [
  'size',
  'className',
  'children',
] as const;

/** Docs-only rows for @rgrmdesign/rgrm-ds-css (shown via `<ArgTypes include={...} />`). */
export const paragraphCssClassArgTypes = {
  '.rgrm-paragraph': {
    control: false,
    description: 'Base body text (main scale).',
    table: {
      type: { summary: 'class', required: true },
      ...tableNoDefault,
    },
  },
  '.rgrm-paragraph--large': {
    control: false,
    description: 'Lead / intro paragraph.',
    table: {
      type: { summary: 'class modifier' },
      ...tableNoDefault,
    },
  },
  '.rgrm-paragraph--small': {
    control: false,
    description: 'Captions and fine print.',
    table: {
      type: { summary: 'class modifier' },
      ...tableNoDefault,
    },
  },
};

const paragraphElementSizeArgType = {
  control: false,
  table: {
    type: {
      summary: 'string',
      detail: "'small' | 'large'",
    },
    ...tableNoDefault,
  },
};

/** Element docs: `size` is an HTML attribute on `<rgrm-paragraph>`. */
export const paragraphElementArgTypes = {
  size: {
    description: 'HTML attribute on `<rgrm-paragraph>`.',
    ...paragraphElementSizeArgType,
  },
  children: {
    ...paragraphChildrenArgType,
    description: 'Text content (light DOM children).',
  },
};

export const paragraphCssClassArgNames = [
  '.rgrm-paragraph',
  '.rgrm-paragraph--large',
  '.rgrm-paragraph--small',
] as const;

export const paragraphElementAttributeArgNames = ['size'] as const;

/** Skip react-docgen merge so extracted enum metadata does not override the Props table. */
export const disableDocgenExtractArgTypes = () => ({});
