import type { AnchorHTMLAttributes } from 'react';

import { linkClassNames } from '@rgrmdesign/rgrm-ds-core/link';

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export function Link({ className, children, ...rest }: LinkProps) {
  return (
    <a className={linkClassNames(className)} {...rest}>
      {children}
    </a>
  );
}
