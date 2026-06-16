import { linkClassNames } from '@rgrmdesign/rgrm-ds-core/link';

export const RGRM_LINK_TAG = 'rgrm-link';

const PROXIED_ATTRIBUTES = new Set([
  'href',
  'target',
  'rel',
  'download',
  'hreflang',
  'referrerpolicy',
  'type',
]);

function syncAttributes(host: HTMLElement, inner: HTMLAnchorElement): void {
  // Copy whitelisted attributes from the custom element onto the inner <a>.
  // (Attributes set on the host are not applied to descendants automatically.)
  for (const name of PROXIED_ATTRIBUTES) {
    const value = host.getAttribute(name);
    if (value === null) {
      inner.removeAttribute(name);
    } else {
      inner.setAttribute(name, value);
    }
  }
}

export class RgrmLinkElement extends HTMLElement {
  static readonly observedAttributes = Array.from(PROXIED_ATTRIBUTES);

  readonly #inner = document.createElement('a');

  connectedCallback(): void {
    this.#mountInner();
    this.#render();
  }

  attributeChangedCallback(): void {
    this.#render();
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

  #render(): void {
    this.#inner.className = linkClassNames();
    syncAttributes(this, this.#inner);
  }
}
