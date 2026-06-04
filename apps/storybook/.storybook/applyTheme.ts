export type ThemeName = 'root' | 'dark' | 'brand';

export function resolveTheme(value: unknown): ThemeName {
  if (value === 'dark' || value === 'brand') return value;
  return 'root';
}

/** Full-preview theme on `<html>` (Canvas tab). */
export function applyDocumentTheme(value: unknown): void {
  document.documentElement.dataset.theme = resolveTheme(value);
}

/** Neutral docs chrome: base tokens on `<html>` only. */
export function resetDocumentTheme(): void {
  document.documentElement.dataset.theme = 'root';
}

export function isDocsViewMode(): boolean {
  if (typeof document === 'undefined') return false;
  return new URLSearchParams(document.location.search).get('viewMode') === 'docs';
}
