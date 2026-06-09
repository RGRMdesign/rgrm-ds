import '@rgrmdesign/rgrm-ds-css/root';

export {
  RGRM_ROOT_CLASS,
  applyRootDocumentClasses,
  removeRootDocumentClasses,
} from '@rgrmdesign/rgrm-ds-core/root';
export { RGRM_ROOT_TAG, RgrmRootElement } from './root-element.js';

import { RGRM_ROOT_TAG, RgrmRootElement } from './root-element.js';

if (!customElements.get(RGRM_ROOT_TAG)) {
  customElements.define(RGRM_ROOT_TAG, RgrmRootElement);
}
