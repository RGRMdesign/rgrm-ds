import { paragraphClassNames, type ParagraphSize } from './classNames.js';

export const RGRM_PARAGRAPH_TAG = 'rgrm-paragraph';

function parseSizeAttribute(value: string | null): ParagraphSize | undefined {
  return value === 'small' || value === 'large' ? value : undefined;
}

export class RgrmParagraphElement extends HTMLElement {
  static readonly observedAttributes = ['size'];

  readonly #inner = document.createElement('p');

  connectedCallback(): void {
    this.#mountInner();
    this.#applyClasses();
  }

  attributeChangedCallback(name: string): void {
    if (name === 'size') {
      this.#applyClasses();
    }
  }

  #mountInner(): void {
    if (this.#inner.parentNode === this) {
      return;
    }

    while (this.firstChild) {
      this.#inner.appendChild(this.firstChild);
    }

    this.appendChild(this.#inner);
  }

  #applyClasses(): void {
    this.#inner.className = paragraphClassNames(
      parseSizeAttribute(this.getAttribute('size')),
    );
  }
}
