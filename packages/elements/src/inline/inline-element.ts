import { inlineClassNames, type InlineGap } from '@rgrmdesign/rgrm-ds-core/inline';

export const RGRM_INLINE_TAG = 'rgrm-inline';

const GAPS: readonly InlineGap[] = ['-', 'sm', 'md', 'lg'];

function parseGapAttribute(value: string | null): InlineGap {
  return (GAPS as readonly string[]).includes(value ?? '') ? (value as InlineGap) : '-';
}

export class RgrmInlineElement extends HTMLElement {
  static readonly observedAttributes = ['gap'];

  connectedCallback(): void {
    this.#applyClasses();
  }

  attributeChangedCallback(name: string): void {
    if (name === 'gap') {
      this.#applyClasses();
    }
  }

  #applyClasses(): void {
    this.className = inlineClassNames({ gap: parseGapAttribute(this.getAttribute('gap')) });
  }
}
