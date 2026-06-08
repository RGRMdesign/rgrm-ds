import type { HTMLAttributes } from 'react';

import {
  headingClassNames,
  type HeadingAppearance,
  type HeadingLevel,
} from '@rgrmdesign/rgrm-ds-core/heading';

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  /** Semantic heading level; sets the rendered `<h1>`–`<h6>` element. Defaults to 2. */
  level?: HeadingLevel;
  /** Visual scale; defaults to `level` when omitted. */
  appearance?: HeadingAppearance;
};

export function Heading({ level = 2, appearance, className, children, ...rest }: HeadingProps) {
  const Tag = `h${level}` as const;
  const resolvedAppearance = appearance ?? level;

  return (
    <Tag className={headingClassNames(resolvedAppearance, className)} {...rest}>
      {children}
    </Tag>
  );
}
