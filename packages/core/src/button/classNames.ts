export type ButtonVariant = 'primary';

export const BUTTON_LABEL_CLASS = 'rgrm-button__label';

export function buttonClassNames(variant: ButtonVariant = 'primary', className?: string): string {
  return ['rgrm-button', `rgrm-button--${variant}`, className].filter(Boolean).join(' ');
}
