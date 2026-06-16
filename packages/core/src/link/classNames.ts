export function linkClassNames(className?: string): string {
  return ['rgrm-link', className].filter(Boolean).join(' ');
}
