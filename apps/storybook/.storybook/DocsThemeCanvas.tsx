import React, { useEffect, useRef } from 'react';

import type { ThemeName } from './applyTheme';

const DOCS_CANVAS_SELECTORS = ['.sbdocs-preview', '.docs-story'] as const;

/** Apply `data-theme` to Storybook’s docs preview shell (incl. padded canvas area). */
export function DocsThemeCanvas({
  theme,
  children,
}: {
  theme: ThemeName;
  children: React.ReactNode;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shells = DOCS_CANVAS_SELECTORS.map((selector) =>
      rootRef.current?.closest<HTMLElement>(selector),
    ).filter((el): el is HTMLElement => el != null);

    if (shells.length === 0) return;

    for (const shell of shells) {
      shell.dataset.theme = theme;
    }

    return () => {
      for (const shell of shells) {
        delete shell.dataset.theme;
      }
    };
  }, [theme]);

  return (
    <div ref={rootRef} className="sb-docs-canvas">
      {children}
    </div>
  );
}
