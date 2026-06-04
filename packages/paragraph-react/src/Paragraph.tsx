import type { HTMLAttributes } from 'react';

import { paragraphClassNames, type ParagraphSize } from './classNames.js';

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & {
  /** Alternate typography scale. Omit for the default (main) body style. */
  size?: ParagraphSize;
};

export function Paragraph({ size, className, children, ...rest }: ParagraphProps) {
  return (
    <p className={paragraphClassNames(size, className)} {...rest}>
      {children}
    </p>
  );
}
