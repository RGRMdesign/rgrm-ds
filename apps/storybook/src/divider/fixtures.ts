export type DividerStoryArgs = {
  className?: string;
};

export const dividerFixtures = {
  default: {},
} satisfies Record<string, DividerStoryArgs>;

const tableNoDefault = { defaultValue: { summary: null } } as const;

export const dividerReactArgTypes = {
  className: {
    control: 'text' as const,
    description: 'Extra CSS classes merged onto the horizontal rule.',
    table: { type: { summary: 'string' }, ...tableNoDefault },
  },
};

export const dividerReactPropArgNames = ['className'] as const;

export const dividerCssClassArgTypes = {
  '.rgrm-divider': {
    control: false,
    description: 'Horizontal divider styles for a native `<hr>`.',
    table: { type: { summary: 'class', required: true }, ...tableNoDefault },
  },
};

export const dividerCssClassArgNames = ['.rgrm-divider'] as const;

export const dividerElementAttributeArgNames = [] as const;

export const disableDocgenExtractArgTypes = () => ({});
