export type LinkStoryArgs = {
  href: string;
  children: string;
};

export const linkFixtures = {
  default: {
    href: 'https://example.com',
    children: 'Voorbeeld link',
  },
} satisfies Record<string, LinkStoryArgs>;

const tableNoDefault = { defaultValue: { summary: null } } as const;

export const linkArgTypes = {
  href: {
    control: 'text' as const,
    description: 'Destination URL.',
    table: { type: { summary: 'string', required: true }, ...tableNoDefault },
  },
  children: {
    control: 'text' as const,
    description: 'Link label.',
    table: { type: { summary: 'string', required: true }, ...tableNoDefault },
  },
};

export const linkReactArgTypes = {
  ...linkArgTypes,
  className: {
    control: 'text' as const,
    description: 'Extra CSS classes merged onto the anchor.',
    table: { type: { summary: 'string' }, ...tableNoDefault },
  },
};

export const linkReactPropArgNames = ['href', 'className', 'children'] as const;

export const linkCssClassArgTypes = {
  '.rgrm-link': {
    control: false,
    description: 'Inline link styles (colour + underline).',
    table: { type: { summary: 'class', required: true }, ...tableNoDefault },
  },
};

export const linkCssClassArgNames = ['.rgrm-link'] as const;

export const linkElementArgTypes = {
  href: {
    ...linkArgTypes.href,
    description: 'HTML attribute on `<rgrm-link>`.',
  },
};

export const linkElementAttributeArgNames = ['href'] as const;

export const disableDocgenExtractArgTypes = () => ({});
