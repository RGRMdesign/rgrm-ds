import {
  BUTTON_LABEL_CLASS,
  buttonClassNames,
  type ButtonVariant,
} from '@rgrmdesign/rgrm-ds-core/button';

export const RGRM_BUTTON_TAG = 'rgrm-button';

const DEFAULT_VARIANT: ButtonVariant = 'primary';

function parseVariantAttribute(value: string | null): ButtonVariant {
  return value === 'primary' ? value : DEFAULT_VARIANT;
}

export class RgrmButtonElement extends HTMLElement {
  static readonly observedAttributes = ['variant'];

  readonly #inner: HTMLButtonElement = document.createElement('button');

  connectedCallback(): void {
    if (!this.#inner.type) {
      this.#inner.type = 'button';
    }
    this.#mountInner();
    this.#render();
  }

  attributeChangedCallback(name: string): void {
    if (name === 'variant') {
      this.#render();
    }
  }

  #mountInner(): void {
    if (this.#inner.parentNode === this) {
      return;
    }

    while (this.firstChild) {
      this.#inner.appendChild(this.firstChild);
    }

    this.#wrapLabelIfNeeded(this.#inner);
    this.appendChild(this.#inner);
  }

  #wrapLabelIfNeeded(container: HTMLElement): void {
    if (container.querySelector(`.${BUTTON_LABEL_CLASS}`)) {
      return;
    }

    const { childNodes } = container;

    if (childNodes.length !== 1 || childNodes[0]?.nodeType !== Node.TEXT_NODE) {
      return;
    }

    const text = container.textContent ?? '';

    container.textContent = '';

    const label = document.createElement('span');
    label.className = BUTTON_LABEL_CLASS;
    label.textContent = text;
    container.appendChild(label);
  }

  #render(): void {
    this.#inner.className = buttonClassNames(
      parseVariantAttribute(this.getAttribute('variant')),
    );
  }
}
