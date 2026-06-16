export type StackGap = '-' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type StackClassNamesOptions = {
  gap?: StackGap;
};

export function stackClassNames(
  { gap = '-' }: StackClassNamesOptions = {},
  className?: string,
): string {
  return ['rgrm-stack', gap !== '-' && `rgrm-stack--gap-${gap}`, className].filter(Boolean).join(' ');
}
