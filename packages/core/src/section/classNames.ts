export type SectionTheme = 'root' | 'dark' | 'brand';
export type SectionSpacing = 'none' | 'small' | 'main' | 'large' | 'page-top';
export type SectionWidth = 'small' | 'main' | 'full';

export interface SectionClassNamesOptions {
  /** Top padding token (`--rgrm-scale-section-space-*`). Defaults to `'main'`. */
  spacingTop?: SectionSpacing;
  /** Bottom padding token (`--rgrm-scale-section-space-*`). Defaults to `'main'`. */
  spacingBottom?: SectionSpacing;
}

export function sectionClassNames(
  { spacingTop = 'main', spacingBottom = 'main' }: SectionClassNamesOptions = {},
  className?: string,
): string {
  return [
    'rgrm-section',
    `rgrm-section--space-top-${spacingTop}`,
    `rgrm-section--space-bottom-${spacingBottom}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');
}

export function sectionContainerClassNames(
  width: SectionWidth = 'main',
  className?: string,
): string {
  return ['rgrm-section__container', `rgrm-section__container--${width}`, className]
    .filter(Boolean)
    .join(' ');
}

export const RGRM_SECTION_BACKGROUND_CLASS = 'rgrm-section__background';
