export type RootStoryArgs = {
  children: string;
};

export const rootFixtures = {
  default: {
    children:
      'Document-level typography and colours come from the Root component tokens on html and body.',
  },
} satisfies Record<string, RootStoryArgs>;

const rootChildrenArgType = {
  control: 'text' as const,
  description: 'Demo text rendered inside the story canvas.',
  table: {
    type: { summary: 'string', required: true },
    defaultValue: { summary: null },
  },
};

export const rootArgTypes = {
  children: rootChildrenArgType,
};

export const rootReactArgTypes = {
  children: {
    ...rootChildrenArgType,
    table: {
      type: { summary: 'ReactNode', required: true },
      defaultValue: { summary: null },
    },
  },
};

export const rootCssClassArgTypes = {
  'html.rgrm-root': {
    control: false,
    description:
      'Sets `font-size: 100%` (stable rem basis) and `box-sizing: border-box` (inherited by descendants).',
    table: {
      type: { summary: 'class on `<html>`', required: true },
      defaultValue: { summary: null },
    },
  },
  'body.rgrm-root': {
    control: false,
    description:
      'Sets default text `font-size` from `--rgrm-root-font-size`, plus colour, background, typography, `margin: 0`, and `min-height: 100dvh` from `--rgrm-root-*` tokens.',
    table: {
      type: { summary: 'class on `<body>`', required: true },
      defaultValue: { summary: null },
    },
  },
  'html.rgrm-root ::selection': {
    control: false,
    description:
      'Sets text selection colours from `--rgrm-root-selection-background-color` and `--rgrm-root-selection-color`.',
    table: {
      type: { summary: 'pseudo-element (document-wide)' },
      defaultValue: { summary: null },
    },
  },
};

export const rootCssClassArgNames = [
  'html.rgrm-root',
  'body.rgrm-root',
  'html.rgrm-root ::selection',
] as const;

export const disableDocgenExtractArgTypes = () => ({});
