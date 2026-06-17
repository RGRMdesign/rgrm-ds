export function dividerClassNames(className?: string): string {
  return ['rgrm-divider', className].filter(Boolean).join(' ');
}
