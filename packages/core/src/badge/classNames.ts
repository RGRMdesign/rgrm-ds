export function badgeClassNames(className?: string): string {
  return ['rgrm-badge', className].filter(Boolean).join(' ');
}
