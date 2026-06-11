import {
  CURRENT_STORY_WAS_SET,
  DOCS_PREPARED,
  GLOBALS_UPDATED,
} from 'storybook/internal/core-events';
import { addons } from 'storybook/preview-api';

import { applyDocumentTheme, isDocsViewMode, resetDocumentTheme } from './applyTheme';

let lastTheme: unknown = 'root';

function syncDocumentTheme(globals?: { theme?: unknown }): void {
  if (globals?.theme !== undefined) {
    lastTheme = globals.theme;
  }

  if (isDocsViewMode()) {
    resetDocumentTheme();
    return;
  }

  applyDocumentTheme(lastTheme);
}

/** Keep `<html data-theme>` in sync for Canvas; reset on Documentation. */
export function setupThemeSync(): void {
  resetDocumentTheme();

  const channel = addons.getChannel();

  channel.on(GLOBALS_UPDATED, ({ globals }) => {
    syncDocumentTheme(globals);
  });

  channel.on(DOCS_PREPARED, () => {
    resetDocumentTheme();
  });

  channel.on(CURRENT_STORY_WAS_SET, (selection: { viewMode?: string }) => {
    if (selection?.viewMode === 'docs') {
      resetDocumentTheme();
      return;
    }
    applyDocumentTheme(lastTheme);
  });
}
