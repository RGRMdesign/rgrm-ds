export type InlineGap = '-' | 'sm' | 'md' | 'lg';

export type InlineClassNamesOptions = {
  gap?: InlineGap;
};

export function inlineClassNames(
  { gap = '-' }: InlineClassNamesOptions = {},
  className?: string,
): string {
  return ['rgrm-inline', gap !== '-' && `rgrm-inline--gap-${gap}`, className]
    .filter(Boolean)
    .join(' ');
}
