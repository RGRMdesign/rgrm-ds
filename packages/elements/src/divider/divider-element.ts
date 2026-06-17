import { dividerClassNames } from '@rgrmdesign/rgrm-ds-core/divider';

export const RGRM_DIVIDER_TAG = 'rgrm-divider';

export class RgrmDividerElement extends HTMLElement {
  static readonly observedAttributes: string[] = [];

  readonly #inner = document.createElement('hr');

  connectedCallback(): void {
    this.#mountInner();
    this.#render();
  }

  #mountInner(): void {
    if (this.#inner.parentNode === this) {
      return;
    }

    this.replaceChildren(this.#inner);
  }

  #render(): void {
    this.#inner.className = dividerClassNames();
  }
}
