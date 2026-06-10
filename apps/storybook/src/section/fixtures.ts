import type { SectionSpacing, SectionTheme, SectionWidth } from '@rgrmdesign/rgrm-ds-core/section';

export type SectionStoryArgs = {
  theme?: SectionTheme;
  spacingTop?: SectionSpacing;
  spacingBottom?: SectionSpacing;
  width?: SectionWidth;
  /** Render a full-bleed background image behind the content. */
  withBackground?: boolean;
  heading: string;
  body: string;
};

/** Demo image used for the background variant. */
export const SECTION_BACKGROUND_SRC = 'https://picsum.photos/seed/rgrm-section/1600/900';

const DEFAULT_HEADING = 'Section title';
const DEFAULT_BODY =
  'A section is a full-width band on a page. Its background and text colour come from the chosen theme, while the content sits in a centered, max-width container.';

export const sectionFixtures = {
  default: {
    theme: 'root',
    spacingTop: 'main',
    spacingBottom: 'main',
    width: 'main',
    heading: DEFAULT_HEADING,
    body: DEFAULT_BODY,
  },
  dark: {
    theme: 'dark',
    spacingTop: 'main',
    spacingBottom: 'main',
    width: 'main',
    heading: 'Dark theme',
    body: DEFAULT_BODY,
  },
  brand: {
    theme: 'brand',
    spacingTop: 'main',
    spacingBottom: 'main',
    width: 'main',
    heading: 'Brand theme',
    body: DEFAULT_BODY,
  },
  widthSmall: {
    theme: 'root',
    spacingTop: 'main',
    spacingBottom: 'main',
    width: 'small',
    heading: 'Narrow container',
    body: DEFAULT_BODY,
  },
  widthFull: {
    theme: 'root',
    spacingTop: 'main',
    spacingBottom: 'main',
    width: 'full',
    heading: 'Full-width container',
    body: DEFAULT_BODY,
  },
  pageTop: {
    theme: 'root',
    spacingTop: 'page-top',
    spacingBottom: 'main',
    width: 'main',
    heading: 'Page-top spacing',
    body: DEFAULT_BODY,
  },
  background: {
    theme: 'dark',
    spacingTop: 'large',
    spacingBottom: 'large',
    width: 'main',
    withBackground: true,
    heading: 'Background media',
    body: DEFAULT_BODY,
  },
} satisfies Record<string, SectionStoryArgs>;

/**
 * Storybook `<ArgTypes />` docs table columns (no custom table):
 * - Name → arg key
 * - Description → `description` (+ Type block from `table.type` below it)
 * - Default → `table.defaultValue`
 * Control column only appears on interactive canvases, not in docs ArgTypes.
 */
const tableNoDefault = { defaultValue: { summary: null } } as const;

const themeControl = {
  control: 'inline-radio' as const,
  options: ['root', 'dark', 'brand'],
};

const spacingControl = {
  control: 'select' as const,
  options: ['none', 'small', 'main', 'large', 'page-top'],
};

const widthControl = {
  control: 'select' as const,
  options: ['small', 'main', 'full'],
};

const contentArgTypes = {
  heading: {
    control: 'text' as const,
    description: 'Demo heading text rendered inside the container.',
    table: { type: { summary: 'string', required: true }, ...tableNoDefault },
  },
  body: {
    control: 'text' as const,
    description: 'Demo body text rendered inside the container.',
    table: { type: { summary: 'string', required: true }, ...tableNoDefault },
  },
};

/** Story + docs argTypes for CSS / Element demos. */
export const sectionArgTypes = {
  theme: {
    ...themeControl,
    description: 'Design token theme; applied via `data-theme` (omitted for `root`).',
    table: {
      type: { summary: 'SectionTheme', detail: "'root' | 'dark' | 'brand'" },
      defaultValue: { summary: 'root' },
    },
  },
  spacingTop: {
    ...spacingControl,
    description: 'Top padding scale (`--rgrm-scale-section-space-*`).',
    table: {
      type: {
        summary: 'SectionSpacing',
        detail: "'none' | 'small' | 'main' | 'large' | 'page-top'",
      },
      defaultValue: { summary: 'main' },
    },
  },
  spacingBottom: {
    ...spacingControl,
    description: 'Bottom padding scale (`--rgrm-scale-section-space-*`).',
    table: {
      type: {
        summary: 'SectionSpacing',
        detail: "'none' | 'small' | 'main' | 'large' | 'page-top'",
      },
      defaultValue: { summary: 'main' },
    },
  },
  width: {
    ...widthControl,
    description: 'Container max-width.',
    table: {
      type: { summary: 'SectionWidth', detail: "'small' | 'main' | 'full'" },
      defaultValue: { summary: 'main' },
    },
  },
  withBackground: {
    control: 'boolean' as const,
    description: 'Toggle the demo full-bleed background image.',
    table: { type: { summary: 'boolean' }, ...tableNoDefault },
  },
  ...contentArgTypes,
};

/** React docs for `<Section>`. */
export const sectionReactArgTypes = {
  ...sectionArgTypes,
  background: {
    control: false,
    description: 'Optional full-bleed background layer (e.g. an `<img>` or `<video>`).',
    table: { type: { summary: 'ReactNode' }, ...tableNoDefault },
  },
  className: {
    control: 'text' as const,
    description: 'Extra CSS classes merged onto the section root.',
    table: { type: { summary: 'string' }, ...tableNoDefault },
  },
  children: {
    control: false,
    description: 'Section content rendered inside the container.',
    table: { type: { summary: 'ReactNode', required: true }, ...tableNoDefault },
  },
};

export const sectionReactPropArgNames = [
  'theme',
  'spacingTop',
  'spacingBottom',
  'width',
  'background',
  'className',
  'children',
] as const;

/** Docs-only rows for @rgrmdesign/rgrm-ds-css (shown via `<ArgTypes include={...} />`). */
export const sectionCssClassArgTypes = {
  '.rgrm-section': {
    control: false,
    description: 'Section root: full width, theme background + text colour.',
    table: { type: { summary: 'class', required: true }, ...tableNoDefault },
  },
  '.rgrm-section--space-top-*': {
    control: false,
    description: 'Top padding modifier (`none`, `small`, `main`, `large`, `page-top`).',
    table: { type: { summary: 'class modifier' }, ...tableNoDefault },
  },
  '.rgrm-section--space-bottom-*': {
    control: false,
    description: 'Bottom padding modifier (`none`, `small`, `main`, `large`, `page-top`).',
    table: { type: { summary: 'class modifier' }, ...tableNoDefault },
  },
  '.rgrm-section__background': {
    control: false,
    description: 'Full-bleed background layer; img/video are object-fit: cover.',
    table: { type: { summary: 'class' }, ...tableNoDefault },
  },
  '.rgrm-section__container': {
    control: false,
    description: 'Centered, max-width content wrapper.',
    table: { type: { summary: 'class', required: true }, ...tableNoDefault },
  },
  '.rgrm-section__container--*': {
    control: false,
    description: 'Container width modifier (`small`, `main`, `full`).',
    table: { type: { summary: 'class modifier' }, ...tableNoDefault },
  },
};

export const sectionCssClassArgNames = [
  '.rgrm-section',
  '.rgrm-section--space-top-*',
  '.rgrm-section--space-bottom-*',
  '.rgrm-section__background',
  '.rgrm-section__container',
  '.rgrm-section__container--*',
] as const;

/** Element docs: attributes on `<rgrm-section>`. */
export const sectionElementArgTypes = {
  theme: {
    ...themeControl,
    description: 'HTML attribute on `<rgrm-section>`.',
    table: {
      type: { summary: 'string', detail: "'root' | 'dark' | 'brand'" },
      defaultValue: { summary: 'root' },
    },
  },
  'spacing-top': {
    ...spacingControl,
    description: 'HTML attribute on `<rgrm-section>`.',
    table: {
      type: { summary: 'string', detail: "'none' | 'small' | 'main' | 'large' | 'page-top'" },
      defaultValue: { summary: 'main' },
    },
  },
  'spacing-bottom': {
    ...spacingControl,
    description: 'HTML attribute on `<rgrm-section>`.',
    table: {
      type: { summary: 'string', detail: "'none' | 'small' | 'main' | 'large' | 'page-top'" },
      defaultValue: { summary: 'main' },
    },
  },
  width: {
    ...widthControl,
    description: 'HTML attribute on `<rgrm-section>`.',
    table: {
      type: { summary: 'string', detail: "'small' | 'main' | 'full'" },
      defaultValue: { summary: 'main' },
    },
  },
  withBackground: {
    control: 'boolean' as const,
    description: 'Toggle the demo `slot="background"` image.',
    table: { type: { summary: 'boolean' }, ...tableNoDefault },
  },
  ...contentArgTypes,
};

export const sectionElementAttributeArgNames = [
  'theme',
  'spacing-top',
  'spacing-bottom',
  'width',
] as const;

/** Skip react-docgen merge so extracted metadata does not override the Props table. */
export const disableDocgenExtractArgTypes = () => ({});
