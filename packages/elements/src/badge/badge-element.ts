import { badgeClassNames } from '@rgrmdesign/rgrm-ds-core/badge';

export const RGRM_BADGE_TAG = 'rgrm-badge';

export class RgrmBadgeElement extends HTMLElement {
  readonly #inner = document.createElement('span');

  connectedCallback(): void {
    this.#mountInner();
    this.#applyClasses();
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
    this.#inner.className = badgeClassNames();
  }
}
