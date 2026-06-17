import { RGRM_BUTTON_TAG, RgrmButtonElement } from '@rgrmdesign/rgrm-ds-elements/button';
import { RGRM_DIVIDER_TAG, RgrmDividerElement } from '@rgrmdesign/rgrm-ds-elements/divider';
import { RGRM_HEADING_TAG, RgrmHeadingElement } from '@rgrmdesign/rgrm-ds-elements/heading';
import { RGRM_INLINE_TAG, RgrmInlineElement } from '@rgrmdesign/rgrm-ds-elements/inline';
import { RGRM_PARAGRAPH_TAG, RgrmParagraphElement } from '@rgrmdesign/rgrm-ds-elements/paragraph';
import { RGRM_ROOT_TAG, RgrmRootElement } from '@rgrmdesign/rgrm-ds-elements/root';
import { RGRM_SECTION_TAG, RgrmSectionElement } from '@rgrmdesign/rgrm-ds-elements/section';
import { RGRM_STACK_TAG, RgrmStackElement } from '@rgrmdesign/rgrm-ds-elements/stack';

/** Register design-system custom elements for Storybook (incl. production builds). */
export function registerRgrmElements(): void {
  const elements: Array<[string, CustomElementConstructor]> = [
    [RGRM_BUTTON_TAG, RgrmButtonElement],
    [RGRM_DIVIDER_TAG, RgrmDividerElement],
    [RGRM_HEADING_TAG, RgrmHeadingElement],
    [RGRM_INLINE_TAG, RgrmInlineElement],
    [RGRM_PARAGRAPH_TAG, RgrmParagraphElement],
    [RGRM_ROOT_TAG, RgrmRootElement],
    [RGRM_SECTION_TAG, RgrmSectionElement],
    [RGRM_STACK_TAG, RgrmStackElement],
  ];

  for (const [tag, constructor] of elements) {
    if (!customElements.get(tag)) {
      customElements.define(tag, constructor);
    }
  }
}
