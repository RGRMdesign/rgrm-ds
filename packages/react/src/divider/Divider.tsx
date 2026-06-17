import type { ComponentPropsWithoutRef } from 'react';

import { dividerClassNames } from '@rgrmdesign/rgrm-ds-core/divider';

export type DividerProps = ComponentPropsWithoutRef<'hr'>;

export function Divider({ className, ...rest }: DividerProps) {
  return <hr className={dividerClassNames(className)} {...rest} />;
}
