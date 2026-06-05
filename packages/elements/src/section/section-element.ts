import {
  RGRM_SECTION_BACKGROUND_CLASS,
  sectionClassNames,
  sectionContainerClassNames,
  type SectionSpacing,
  type SectionTheme,
  type SectionWidth,
} from '@rgrmdesign/rgrm-ds-core/section';

export const RGRM_SECTION_TAG = 'rgrm-section';

const SPACINGS: readonly SectionSpacing[] = ['none', 'small', 'main', 'large', 'page-top'];
const WIDTHS: readonly SectionWidth[] = ['small', 'main', 'full'];
const THEMES: readonly SectionTheme[] = ['root', 'dark', 'brand'];

function parseSpacing(value: string | null): SectionSpacing {
  return (SPACINGS as readonly string[]).includes(value ?? '') ? (value as SectionSpacing) : 'main';
}

function parseWidth(value: string | null): SectionWidth {
  return (WIDTHS as readonly string[]).includes(value ?? '') ? (value as SectionWidth) : 'main';
}

function parseTheme(value: string | null): SectionTheme {
  return (THEMES as readonly string[]).includes(value ?? '') ? (value as SectionTheme) : 'root';
}

export class RgrmSectionElement extends HTMLElement {
  static readonly observedAttributes = ['theme', 'spacing-top', 'spacing-bottom', 'width'];

  readonly #background = document.createElement('div');
  readonly #container = document.createElement('div');
  #mounted = false;

  connectedCallback(): void {
    this.#mountInner();
    this.#applyClasses();
  }

  attributeChangedCallback(): void {
    if (this.#mounted) {
      this.#applyClasses();
    }
  }

  #mountInner(): void {
    if (this.#mounted) {
      return;
    }

    this.#background.className = RGRM_SECTION_BACKGROUND_CLASS;

    const nodes = Array.from(this.childNodes);
    for (const node of nodes) {
      if (
        node.nodeType === Node.ELEMENT_NODE &&
        (node as Element).getAttribute('slot') === 'background'
      ) {
        (node as Element).removeAttribute('slot');
        this.#background.appendChild(node);
      } else {
        this.#container.appendChild(node);
      }
    }

    if (this.#background.childNodes.length > 0) {
      this.appendChild(this.#background);
    }
    this.appendChild(this.#container);
    this.#mounted = true;
  }

  #applyClasses(): void {
    this.className = sectionClassNames({
      spacingTop: parseSpacing(this.getAttribute('spacing-top')),
      spacingBottom: parseSpacing(this.getAttribute('spacing-bottom')),
    });

    this.#container.className = sectionContainerClassNames(parseWidth(this.getAttribute('width')));

    const theme = parseTheme(this.getAttribute('theme'));
    if (theme === 'root') {
      this.removeAttribute('data-theme');
    } else {
      this.setAttribute('data-theme', theme);
    }
  }
}
