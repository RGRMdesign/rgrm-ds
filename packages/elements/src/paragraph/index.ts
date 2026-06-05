import '@rgrmdesign/rgrm-ds-css/paragraph';

export { paragraphClassNames, type ParagraphSize } from '@rgrmdesign/rgrm-ds-core/paragraph';
export {
  RGRM_PARAGRAPH_TAG,
  RgrmParagraphElement,
} from './paragraph-element.js';

import { RGRM_PARAGRAPH_TAG, RgrmParagraphElement } from './paragraph-element.js';

if (!customElements.get(RGRM_PARAGRAPH_TAG)) {
  customElements.define(RGRM_PARAGRAPH_TAG, RgrmParagraphElement);
}
