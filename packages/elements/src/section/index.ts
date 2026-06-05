import '@rgrmdesign/rgrm-ds-css/section';

export {
  sectionClassNames,
  sectionContainerClassNames,
  type SectionTheme,
  type SectionSpacing,
  type SectionWidth,
} from '@rgrmdesign/rgrm-ds-core/section';
export { RGRM_SECTION_TAG, RgrmSectionElement } from './section-element.js';

import { RGRM_SECTION_TAG, RgrmSectionElement } from './section-element.js';

if (!customElements.get(RGRM_SECTION_TAG)) {
  customElements.define(RGRM_SECTION_TAG, RgrmSectionElement);
}
