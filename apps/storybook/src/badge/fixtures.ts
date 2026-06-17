export type BadgeStoryArgs = {
  children: string;
};

export const badgeFixtures = {
  default: {
    children: 'New',
  },
} satisfies Record<string, BadgeStoryArgs>;

const tableNoDefault = { defaultValue: { summary: null } } as const;

export const badgeArgTypes = {
  children: {
    control: 'text' as const,
    description: 'Badge label.',
    table: {
      type: { summary: 'string', required: true },
      ...tableNoDefault,
    },
  },
};

export const badgeReactArgTypes = {
  ...badgeArgTypes,
  className: {
    control: 'text' as const,
    description: 'Extra CSS classes merged onto the span.',
    table: { type: { summary: 'string' }, ...tableNoDefault },
  },
};

export const badgeReactPropArgNames = ['className', 'children'] as const;

export const badgeCssClassArgTypes = {
  '.rgrm-badge': {
    control: false,
    description: 'Inline label/chip for short text.',
    table: { type: { summary: 'class', required: true }, ...tableNoDefault },
  },
};

export const badgeCssClassArgNames = ['.rgrm-badge'] as const;

export const badgeElementArgTypes = {
  children: {
    ...badgeArgTypes.children,
    description: 'Label (light DOM children).',
  },
};

export const disableDocgenExtractArgTypes = () => ({});
