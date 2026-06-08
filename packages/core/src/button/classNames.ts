export type ButtonVariant = 'primary';

export function buttonClassNames(
  variant: ButtonVariant = 'primary',
  className?: string,
): string {
  return ['rgrm-button', `rgrm-button--${variant}`, className]
    .filter(Boolean)
    .join(' ');
}
