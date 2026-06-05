export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6 | 'display';

export function headingClassNames(level: HeadingLevel = 2, className?: string): string {
  const modifier = level === 'display' ? 'rgrm-heading--display' : `rgrm-heading--h${level}`;
  return ['rgrm-heading', modifier, className].filter(Boolean).join(' ');
}
