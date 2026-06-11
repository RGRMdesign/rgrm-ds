import type { ButtonVariant } from '@rgrmdesign/rgrm-ds-core/button';

export type ButtonStoryArgs = {
  variant?: ButtonVariant;
  children: string;
};

export const buttonFixtures = {
  primary: {
    variant: 'primary',
    children: 'Primary button',
  },
} satisfies Record<string, ButtonStoryArgs>;

/**
 * Storybook `<ArgTypes />` docs table columns (no custom table):
 * - Name → arg key
 * - Description → `description` (+ Type block from `table.type` below it)
 * - Default → `table.defaultValue` (omit or `summary: null` when there is no default)
 * Control column only appears on interactive canvases, not in docs ArgTypes.
 */
const tableNoDefault = { defaultValue: { summary: null } } as const;

const buttonVariantArgType = {
  control: false,
  table: {
    type: {
      summary: 'ButtonVariant',
      detail: "'primary'",
    },
    defaultValue: { summary: 'primary' },
  },
};

const buttonChildrenArgType = {
  control: 'text' as const,
  description: 'Button label.',
  table: {
    type: { summary: 'string', required: true },
    ...tableNoDefault,
  },
};

/** Story + docs argTypes for CSS / Element demos. */
export const buttonArgTypes = {
  variant: {
    description: 'Visual style modifier.',
    ...buttonVariantArgType,
  },
  children: buttonChildrenArgType,
};

/** React docs for `<Button>`. */
export const buttonReactArgTypes = {
  variant: {
    description: 'Visual style. Omit the prop for the default `primary` style.',
    ...buttonVariantArgType,
  },
  className: {
    description: 'Extra CSS classes merged after variant modifiers.',
    control: 'text' as const,
    table: {
      type: { summary: 'string' },
      ...tableNoDefault,
    },
  },
  children: {
    description: 'Button label.',
    control: 'text' as const,
    table: {
      type: { summary: 'ReactNode', required: true },
      ...tableNoDefault,
    },
  },
};

export const buttonReactPropArgNames = ['variant', 'className', 'children'] as const;

/** Docs-only rows for @rgrmdesign/rgrm-ds-css (shown via `<ArgTypes include={...} />`). */
export const buttonCssClassArgTypes = {
  '.rgrm-button': {
    control: false,
    description: 'Base button (layout + interaction reset).',
    table: {
      type: { summary: 'class', required: true },
      ...tableNoDefault,
    },
  },
  '.rgrm-button--primary': {
    control: false,
    description: 'Primary variant colours, padding and radius.',
    table: {
      type: { summary: 'class modifier' },
      ...tableNoDefault,
    },
  },
  '.rgrm-button__label': {
    control: false,
    description: 'Button label (typography + text-box trim). Wrap text in this span.',
    table: {
      type: { summary: 'class' },
      ...tableNoDefault,
    },
  },
};

const buttonElementVariantArgType = {
  control: false,
  table: {
    type: {
      summary: 'string',
      detail: "'primary'",
    },
    defaultValue: { summary: 'primary' },
  },
};

/** Element docs: `variant` is an HTML attribute on `<rgrm-button>`. */
export const buttonElementArgTypes = {
  variant: {
    description: 'HTML attribute on `<rgrm-button>`.',
    ...buttonElementVariantArgType,
  },
  children: {
    ...buttonChildrenArgType,
    description: 'Label (light DOM children).',
  },
};

export const buttonCssClassArgNames = [
  '.rgrm-button',
  '.rgrm-button--primary',
  '.rgrm-button__label',
] as const;

export const buttonElementAttributeArgNames = ['variant'] as const;

/** Skip react-docgen merge so extracted enum metadata does not override the Props table. */
export const disableDocgenExtractArgTypes = () => ({});
