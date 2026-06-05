import { paragraphClassNames } from '@rgrmdesign/rgrm-ds-core/paragraph';

import type { ParagraphStoryArgs } from './fixtures';

const TOKENS_IMPORT = "import '@rgrmdesign/rgrm-ds-tokens';";

export function paragraphReactInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-react @rgrmdesign/rgrm-ds-tokens react';
}

export function paragraphReactSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import { Paragraph } from '@rgrmdesign/rgrm-ds-react';`;
}

export function paragraphReactUsageSnippet({
  size,
  children,
}: ParagraphStoryArgs): string {
  const sizeProp = size ? ` size="${size}"` : '';
  return `<Paragraph${sizeProp}>${children}</Paragraph>`;
}

export function paragraphCssInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-css @rgrmdesign/rgrm-ds-tokens';
}

export function paragraphCssSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-css/paragraph';`;
}

export function paragraphCssUsageSnippet({
  size,
  children,
}: ParagraphStoryArgs): string {
  const className = paragraphClassNames(size);
  return `<p class="${className}">${children}</p>`;
}

export function paragraphElementInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-elements @rgrmdesign/rgrm-ds-tokens';
}

export function paragraphElementSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-elements/paragraph';`;
}

export function paragraphElementUsageSnippet({
  size,
  children,
}: ParagraphStoryArgs): string {
  const sizeAttr = size ? ` size="${size}"` : '';
  return `<rgrm-paragraph${sizeAttr}>${children}</rgrm-paragraph>`;
}

export function paragraphDocsSource(
  snippet: (args: ParagraphStoryArgs) => string,
): {
  transform: (_code: string, context: { args: ParagraphStoryArgs }) => string;
} {
  return {
    // Do not set type: 'code' — that skips the JSX source decorator and the Code
    // panel falls back to raw CSF source (`{ args: … }`) without transform.
    transform: (_code, context) => snippet(context.args),
  };
}
