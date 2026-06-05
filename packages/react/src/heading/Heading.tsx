import type { HTMLAttributes } from 'react';

import { headingClassNames, type HeadingLevel } from '@rgrmdesign/rgrm-ds-core/heading';

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  /**
   * Heading level (1–6) or `'display'`. Sets the typography scale; `'display'`
   * renders an `<h1>`.
   */
  level?: HeadingLevel;
};

export function Heading({ level = 2, className, children, ...rest }: HeadingProps) {
  const Tag = level === 'display' ? 'h1' : (`h${level}` as const);
  return (
    <Tag className={headingClassNames(level, className)} {...rest}>
      {children}
    </Tag>
  );
}
