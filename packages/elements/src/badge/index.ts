import '@rgrmdesign/rgrm-ds-css/badge';

export { badgeClassNames } from '@rgrmdesign/rgrm-ds-core/badge';
export { RGRM_BADGE_TAG, RgrmBadgeElement } from './badge-element.js';

import { RGRM_BADGE_TAG, RgrmBadgeElement } from './badge-element.js';

if (!customElements.get(RGRM_BADGE_TAG)) {
  customElements.define(RGRM_BADGE_TAG, RgrmBadgeElement);
}
