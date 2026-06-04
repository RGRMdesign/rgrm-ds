import '@rgrmdesign/paragraph-css';

export { paragraphClassNames, type ParagraphSize } from './classNames.js';
export {
  RGRM_PARAGRAPH_TAG,
  RgrmParagraphElement,
} from './paragraph-element.js';

import { RGRM_PARAGRAPH_TAG, RgrmParagraphElement } from './paragraph-element.js';

if (!customElements.get(RGRM_PARAGRAPH_TAG)) {
  customElements.define(RGRM_PARAGRAPH_TAG, RgrmParagraphElement);
}
