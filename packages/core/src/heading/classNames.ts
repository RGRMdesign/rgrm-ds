export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingAppearance = 1 | 2 | 3 | 4 | 5 | 6 | 'display';

export function headingClassNames(appearance: HeadingAppearance = 2, className?: string): string {
  const modifier =
    appearance === 'display' ? 'rgrm-heading--display' : `rgrm-heading--h${appearance}`;
  return ['rgrm-heading', modifier, className].filter(Boolean).join(' ');
}
