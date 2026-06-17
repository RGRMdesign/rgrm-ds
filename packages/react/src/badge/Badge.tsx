import type { HTMLAttributes, ReactNode } from 'react';

import { badgeClassNames } from '@rgrmdesign/rgrm-ds-core/badge';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export function Badge({ className, children, ...rest }: BadgeProps) {
  return (
    <span className={badgeClassNames(className)} {...rest}>
      {children}
    </span>
  );
}
