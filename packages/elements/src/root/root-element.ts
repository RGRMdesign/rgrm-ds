import {
  applyRootDocumentClasses,
  removeRootDocumentClasses,
} from '@rgrmdesign/rgrm-ds-core/root';

export const RGRM_ROOT_TAG = 'rgrm-root';

/**
 * Activates document-level root styles on `<html>` and `<body>`.
 * Place once in the document (e.g. first child of `<body>`).
 */
export class RgrmRootElement extends HTMLElement {
  connectedCallback(): void {
    applyRootDocumentClasses();
  }

  disconnectedCallback(): void {
    removeRootDocumentClasses();
  }
}
