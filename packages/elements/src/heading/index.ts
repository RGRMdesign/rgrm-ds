import '@rgrmdesign/rgrm-ds-css/heading';

export {
  headingClassNames,
  type HeadingAppearance,
  type HeadingLevel,
} from '@rgrmdesign/rgrm-ds-core/heading';
export { RGRM_HEADING_TAG, RgrmHeadingElement } from './heading-element.js';

import { RGRM_HEADING_TAG, RgrmHeadingElement } from './heading-element.js';

if (!customElements.get(RGRM_HEADING_TAG)) {
  customElements.define(RGRM_HEADING_TAG, RgrmHeadingElement);
}
