export type BadgeStoryArgs = {
  children: string;
};

export const badgeFixtures = {
  default: {
    children: 'New',
  },
} satisfies Record<string, BadgeStoryArgs>;

export const badgeExamples = ['New', 'Draft', 'Beta', '3 items'] as const;

const tableNoDefault = { defaultValue: { summary: null } } as const;

export const badgeArgTypes = {
  children: {
    control: 'text' as const,
    description: 'Short label text (status, count, or category).',
    table: { type: { summary: 'string', required: true }, ...tableNoDefault },
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
    description: 'Inline chip/tag styles for short metadata labels.',
    table: { type: { summary: 'class', required: true }, ...tableNoDefault },
  },
};

export const badgeCssClassArgNames = ['.rgrm-badge'] as const;

export const disableDocgenExtractArgTypes = () => ({});
