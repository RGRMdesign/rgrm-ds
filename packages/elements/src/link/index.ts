import '@rgrmdesign/rgrm-ds-css/link';

export { linkClassNames } from '@rgrmdesign/rgrm-ds-core/link';
export { RGRM_LINK_TAG, RgrmLinkElement } from './link-element.js';

import { RGRM_LINK_TAG, RgrmLinkElement } from './link-element.js';

if (!customElements.get(RGRM_LINK_TAG)) {
  customElements.define(RGRM_LINK_TAG, RgrmLinkElement);
}
