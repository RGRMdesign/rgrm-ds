import type { HTMLAttributes } from 'react';

import { stackClassNames, type StackGap } from '@rgrmdesign/rgrm-ds-core/stack';

export type StackProps = HTMLAttributes<HTMLDivElement> & {
  /** Vertical gap between children. `-` for no gap (default). */
  gap?: StackGap;
};

export function Stack({ gap = '-', className, children, ...rest }: StackProps) {
  return (
    <div className={stackClassNames({ gap }, className)} {...rest}>
      {children}
    </div>
  );
}
