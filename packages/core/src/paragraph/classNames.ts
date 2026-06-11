export type ParagraphSize = 'small' | 'large';

export function paragraphClassNames(size?: ParagraphSize, className?: string): string {
  return ['rgrm-paragraph', size && `rgrm-paragraph--${size}`, className].filter(Boolean).join(' ');
}
