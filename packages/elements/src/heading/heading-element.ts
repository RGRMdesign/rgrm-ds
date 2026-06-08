import {
  headingClassNames,
  type HeadingAppearance,
  type HeadingLevel,
} from '@rgrmdesign/rgrm-ds-core/heading';

export const RGRM_HEADING_TAG = 'rgrm-heading';

const DEFAULT_LEVEL: HeadingLevel = 2;

function parseLevelAttribute(value: string | null): HeadingLevel {
  const level = Number(value);
  return Number.isInteger(level) && level >= 1 && level <= 6
    ? (level as HeadingLevel)
    : DEFAULT_LEVEL;
}

function parseAppearanceAttribute(value: string | null): HeadingAppearance | undefined {
  if (value === null) {
    return undefined;
  }
  if (value === 'display') {
    return 'display';
  }
  const appearance = Number(value);
  return Number.isInteger(appearance) && appearance >= 1 && appearance <= 6
    ? (appearance as HeadingAppearance)
    : undefined;
}

export class RgrmHeadingElement extends HTMLElement {
  static readonly observedAttributes = ['level', 'appearance'];

  #inner: HTMLHeadingElement = document.createElement('h2');

  connectedCallback(): void {
    this.#render();
  }

  attributeChangedCallback(name: string): void {
    if (name === 'level' || name === 'appearance') {
      this.#render();
    }
  }

  #render(): void {
    const level = parseLevelAttribute(this.getAttribute('level'));
    const appearance = parseAppearanceAttribute(this.getAttribute('appearance')) ?? level;
    const tagName = `h${level}`;

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
    this.#inner.className = headingClassNames(appearance);
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
