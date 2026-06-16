import '@rgrmdesign/rgrm-ds-css/inline';

export {
  inlineClassNames,
  type InlineClassNamesOptions,
  type InlineGap,
} from '@rgrmdesign/rgrm-ds-core/inline';
export { RGRM_INLINE_TAG, RgrmInlineElement } from './inline-element.js';

import { RGRM_INLINE_TAG, RgrmInlineElement } from './inline-element.js';

if (!customElements.get(RGRM_INLINE_TAG)) {
  customElements.define(RGRM_INLINE_TAG, RgrmInlineElement);
}
