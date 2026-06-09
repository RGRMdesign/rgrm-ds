import { applyRootDocumentClasses, removeRootDocumentClasses } from '@rgrmdesign/rgrm-ds-core/root';
import type { ReactNode } from 'react';
import { useLayoutEffect } from 'react';

export type RootProps = {
  children: ReactNode;
};

/**
 * Activates document-level root styles on `<html>` and `<body>`.
 * Place once at the app root after loading `@rgrmdesign/rgrm-ds-tokens`.
 */
export function Root({ children }: RootProps) {
  useLayoutEffect(() => {
    applyRootDocumentClasses();
    return removeRootDocumentClasses;
  }, []);

  return <>{children}</>;
}
