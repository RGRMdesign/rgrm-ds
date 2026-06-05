import type { HTMLAttributes, ReactNode } from 'react';

import {
  RGRM_SECTION_BACKGROUND_CLASS,
  sectionClassNames,
  sectionContainerClassNames,
  type SectionSpacing,
  type SectionTheme,
  type SectionWidth,
} from '@rgrmdesign/rgrm-ds-core/section';

export type SectionProps = HTMLAttributes<HTMLElement> & {
  /** Design token theme applied via `data-theme`. Omitted for `'root'`. */
  theme?: SectionTheme;
  /** Top padding scale. Defaults to `'main'`. */
  spacingTop?: SectionSpacing;
  /** Bottom padding scale. Defaults to `'main'`. */
  spacingBottom?: SectionSpacing;
  /** Container max-width. Defaults to `'main'`. */
  width?: SectionWidth;
  /** Optional full-bleed background layer (e.g. an `<img>` or `<video>`). */
  background?: ReactNode;
};

export function Section({
  theme = 'root',
  spacingTop = 'main',
  spacingBottom = 'main',
  width = 'main',
  background,
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      className={sectionClassNames({ spacingTop, spacingBottom }, className)}
      data-theme={theme === 'root' ? undefined : theme}
      {...rest}
    >
      {background != null && <div className={RGRM_SECTION_BACKGROUND_CLASS}>{background}</div>}
      <div className={sectionContainerClassNames(width)}>{children}</div>
    </section>
  );
}
