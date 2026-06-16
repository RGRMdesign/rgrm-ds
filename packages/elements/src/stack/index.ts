import '@rgrmdesign/rgrm-ds-css/stack';

export {
  stackClassNames,
  type StackClassNamesOptions,
  type StackGap,
} from '@rgrmdesign/rgrm-ds-core/stack';
export { RGRM_STACK_TAG, RgrmStackElement } from './stack-element.js';

import { RGRM_STACK_TAG, RgrmStackElement } from './stack-element.js';

if (!customElements.get(RGRM_STACK_TAG)) {
  customElements.define(RGRM_STACK_TAG, RgrmStackElement);
}
