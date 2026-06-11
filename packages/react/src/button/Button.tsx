import type { ButtonHTMLAttributes, ReactNode } from 'react';

import {
  BUTTON_LABEL_CLASS,
  buttonClassNames,
  type ButtonVariant,
} from '@rgrmdesign/rgrm-ds-core/button';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Visual style. Defaults to `'primary'`. */
  variant?: ButtonVariant;
};

function buttonContent(children: ReactNode): ReactNode {
  if (typeof children === 'string' || typeof children === 'number') {
    return <span className={BUTTON_LABEL_CLASS}>{children}</span>;
  }

  return children;
}

export function Button({
  variant = 'primary',
  type = 'button',
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={buttonClassNames(variant, className)} {...rest}>
      {buttonContent(children)}
    </button>
  );
}
