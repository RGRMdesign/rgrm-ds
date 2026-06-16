import { stackClassNames, type StackGap } from '@rgrmdesign/rgrm-ds-core/stack';

export const RGRM_STACK_TAG = 'rgrm-stack';

const GAPS: readonly StackGap[] = ['-', 'xs', 'sm', 'md', 'lg', 'xl'];

function parseGapAttribute(value: string | null): StackGap {
  return (GAPS as readonly string[]).includes(value ?? '') ? (value as StackGap) : '-';
}

export class RgrmStackElement extends HTMLElement {
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
    this.className = stackClassNames({ gap: parseGapAttribute(this.getAttribute('gap')) });
  }
}
