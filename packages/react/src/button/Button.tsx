import type { ButtonHTMLAttributes } from 'react';

import { buttonClassNames, type ButtonVariant } from '@rgrmdesign/rgrm-ds-core/button';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Visual style. Defaults to `'primary'`. */
  variant?: ButtonVariant;
};

export function Button({ variant = 'primary', type = 'button', className, children, ...rest }: ButtonProps) {
  return (
    <button type={type} className={buttonClassNames(variant, className)} {...rest}>
      {children}
    </button>
  );
}
