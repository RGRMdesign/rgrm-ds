import { inlineClassNames } from '@rgrmdesign/rgrm-ds-core/inline';

import type { InlineStoryArgs } from './fixtures';

const TOKENS_IMPORT = "import '@rgrmdesign/rgrm-ds-tokens';";

export function inlineReactInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-react @rgrmdesign/rgrm-ds-tokens react';
}

export function inlineReactSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-react/fonts';
import { Inline } from '@rgrmdesign/rgrm-ds-react';`;
}

export function inlineReactUsageSnippet({ gap }: InlineStoryArgs): string {
  const gapProp = gap && gap !== '-' ? ` gap="${gap}"` : '';
  return `<Inline${gapProp}>
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</Inline>`;
}

export function inlineCssInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-css @rgrmdesign/rgrm-ds-tokens';
}

export function inlineCssSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-css/fonts';
import '@rgrmdesign/rgrm-ds-css/inline';`;
}

export function inlineCssUsageSnippet({ gap }: InlineStoryArgs): string {
  const className = inlineClassNames({ gap });
  return `<div class="${className}">
  <button type="button">One</button>
  <button type="button">Two</button>
  <button type="button">Three</button>
</div>`;
}

export function inlineElementInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-elements @rgrmdesign/rgrm-ds-tokens';
}

export function inlineElementSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-elements/fonts';
import '@rgrmdesign/rgrm-ds-elements/inline';`;
}

export function inlineElementUsageSnippet({ gap }: InlineStoryArgs): string {
  const gapAttr = gap && gap !== '-' ? ` gap="${gap}"` : '';
  return `<rgrm-inline${gapAttr}>
  <button type="button">One</button>
  <button type="button">Two</button>
  <button type="button">Three</button>
</rgrm-inline>`;
}

export function inlineDocsSource(snippet: (args: InlineStoryArgs) => string): {
  transform: (_code: string, context: { args: InlineStoryArgs }) => string;
} {
  return {
    transform: (_code, context) => snippet(context.args),
  };
}
