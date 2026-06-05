import { sectionClassNames, sectionContainerClassNames } from '@rgrmdesign/rgrm-ds-core/section';

import { SECTION_BACKGROUND_SRC, type SectionStoryArgs } from './fixtures';

const TOKENS_IMPORT = "import '@rgrmdesign/rgrm-ds-tokens';";

export function sectionReactInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-react @rgrmdesign/rgrm-ds-tokens react';
}

export function sectionReactSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import { Section, Heading, Paragraph } from '@rgrmdesign/rgrm-ds-react';`;
}

export function sectionReactUsageSnippet({
  theme,
  spacingTop,
  spacingBottom,
  width,
  withBackground,
  heading,
  body,
}: SectionStoryArgs): string {
  const props: string[] = [];
  if (theme && theme !== 'root') props.push(`theme="${theme}"`);
  if (spacingTop && spacingTop !== 'main') props.push(`spacingTop="${spacingTop}"`);
  if (spacingBottom && spacingBottom !== 'main') props.push(`spacingBottom="${spacingBottom}"`);
  if (width && width !== 'main') props.push(`width="${width}"`);
  if (withBackground) props.push(`background={<img src="${SECTION_BACKGROUND_SRC}" alt="" />}`);
  const propStr = props.length ? ` ${props.join(' ')}` : '';
  return `<Section${propStr}>
  <Heading level={2}>${heading}</Heading>
  <Paragraph>${body}</Paragraph>
</Section>`;
}

export function sectionCssInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-css @rgrmdesign/rgrm-ds-tokens';
}

export function sectionCssSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-css/section';`;
}

export function sectionCssUsageSnippet({
  theme,
  spacingTop,
  spacingBottom,
  width,
  withBackground,
  heading,
  body,
}: SectionStoryArgs): string {
  const sectionCls = sectionClassNames({ spacingTop, spacingBottom });
  const containerCls = sectionContainerClassNames(width);
  const dataTheme = theme && theme !== 'root' ? ` data-theme="${theme}"` : '';
  const background = withBackground
    ? `\n  <div class="rgrm-section__background"><img src="${SECTION_BACKGROUND_SRC}" alt="" /></div>`
    : '';
  return `<section class="${sectionCls}"${dataTheme}>${background}
  <div class="${containerCls}">
    <h2 class="rgrm-heading rgrm-heading--h2">${heading}</h2>
    <p class="rgrm-paragraph">${body}</p>
  </div>
</section>`;
}

export function sectionElementInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-elements @rgrmdesign/rgrm-ds-tokens';
}

export function sectionElementSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-elements/section';
import '@rgrmdesign/rgrm-ds-elements/heading';
import '@rgrmdesign/rgrm-ds-elements/paragraph';`;
}

export function sectionElementUsageSnippet({
  theme,
  spacingTop,
  spacingBottom,
  width,
  withBackground,
  heading,
  body,
}: SectionStoryArgs): string {
  const attrs: string[] = [];
  if (theme && theme !== 'root') attrs.push(`theme="${theme}"`);
  if (spacingTop && spacingTop !== 'main') attrs.push(`spacing-top="${spacingTop}"`);
  if (spacingBottom && spacingBottom !== 'main') attrs.push(`spacing-bottom="${spacingBottom}"`);
  if (width && width !== 'main') attrs.push(`width="${width}"`);
  const attrStr = attrs.length ? ` ${attrs.join(' ')}` : '';
  const background = withBackground
    ? `\n  <img slot="background" src="${SECTION_BACKGROUND_SRC}" alt="" />`
    : '';
  return `<rgrm-section${attrStr}>${background}
  <rgrm-heading level="2">${heading}</rgrm-heading>
  <rgrm-paragraph>${body}</rgrm-paragraph>
</rgrm-section>`;
}

export function sectionDocsSource(snippet: (args: SectionStoryArgs) => string): {
  transform: (_code: string, context: { args: SectionStoryArgs }) => string;
} {
  return {
    transform: (_code, context) => snippet(context.args),
  };
}
