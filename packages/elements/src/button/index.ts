import '@rgrmdesign/rgrm-ds-css/button';

export { buttonClassNames, type ButtonVariant } from '@rgrmdesign/rgrm-ds-core/button';
export { RGRM_BUTTON_TAG, RgrmButtonElement } from './button-element.js';

import { RGRM_BUTTON_TAG, RgrmButtonElement } from './button-element.js';

if (!customElements.get(RGRM_BUTTON_TAG)) {
  customElements.define(RGRM_BUTTON_TAG, RgrmButtonElement);
}
