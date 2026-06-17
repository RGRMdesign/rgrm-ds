import '@rgrmdesign/rgrm-ds-css/divider';

export { dividerClassNames } from '@rgrmdesign/rgrm-ds-core/divider';
export { RGRM_DIVIDER_TAG, RgrmDividerElement } from './divider-element.js';

import { RGRM_DIVIDER_TAG, RgrmDividerElement } from './divider-element.js';

if (!customElements.get(RGRM_DIVIDER_TAG)) {
  customElements.define(RGRM_DIVIDER_TAG, RgrmDividerElement);
}
