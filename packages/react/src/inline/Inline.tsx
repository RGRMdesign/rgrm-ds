import type { HTMLAttributes } from 'react';

import { inlineClassNames, type InlineGap } from '@rgrmdesign/rgrm-ds-core/inline';

export type InlineProps = HTMLAttributes<HTMLDivElement> & {
  /** Horizontal gap between children. `-` for no gap (default). */
  gap?: InlineGap;
};

export function Inline({ gap = '-', className, children, ...rest }: InlineProps) {
  return (
    <div className={inlineClassNames({ gap }, className)} {...rest}>
      {children}
    </div>
  );
}
