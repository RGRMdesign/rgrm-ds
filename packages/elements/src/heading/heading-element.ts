import { headingClassNames, type HeadingLevel } from '@rgrmdesign/rgrm-ds-core/heading';

export const RGRM_HEADING_TAG = 'rgrm-heading';

const DEFAULT_LEVEL: HeadingLevel = 2;

function parseLevelAttribute(value: string | null): HeadingLevel {
  if (value === 'display') {
    return 'display';
  }
  const level = Number(value);
  return Number.isInteger(level) && level >= 1 && level <= 6
    ? (level as HeadingLevel)
    : DEFAULT_LEVEL;
}

export class RgrmHeadingElement extends HTMLElement {
  static readonly observedAttributes = ['level'];

  #inner: HTMLHeadingElement = document.createElement('h2');

  connectedCallback(): void {
    this.#render();
  }

  attributeChangedCallback(name: string): void {
    if (name === 'level') {
      this.#render();
    }
  }

  #render(): void {
    const level = parseLevelAttribute(this.getAttribute('level'));
    const tagName = level === 'display' ? 'h1' : `h${level}`;

    if (this.#inner.localName !== tagName) {
      const next = document.createElement(tagName) as HTMLHeadingElement;
      while (this.#inner.firstChild) {
        next.appendChild(this.#inner.firstChild);
      }
      if (this.#inner.parentNode === this) {
        this.replaceChild(next, this.#inner);
      }
      this.#inner = next;
    }

    this.#mountInner();
    this.#inner.className = headingClassNames(level);
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
}
