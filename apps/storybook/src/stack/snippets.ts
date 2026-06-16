import { stackClassNames } from '@rgrmdesign/rgrm-ds-core/stack';

import type { StackStoryArgs } from './fixtures';

const TOKENS_IMPORT = "import '@rgrmdesign/rgrm-ds-tokens';";

export function stackReactInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-react @rgrmdesign/rgrm-ds-tokens react';
}

export function stackReactSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-react/fonts';
import { Stack } from '@rgrmdesign/rgrm-ds-react';`;
}

export function stackReactUsageSnippet({ gap }: StackStoryArgs): string {
  const gapProp = gap && gap !== '-' ? ` gap="${gap}"` : '';
  return `<Stack${gapProp}>
  <Heading level={2}>Title</Heading>
  <Paragraph>Body copy.</Paragraph>
  <Button>Action</Button>
</Stack>`;
}

export function stackCssInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-css @rgrmdesign/rgrm-ds-tokens';
}

export function stackCssSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-css/fonts';
import '@rgrmdesign/rgrm-ds-css/stack';`;
}

export function stackCssUsageSnippet({ gap }: StackStoryArgs): string {
  const className = stackClassNames({ gap });
  return `<div class="${className}">
  <h2>Title</h2>
  <p>Body copy.</p>
  <button type="button">Action</button>
</div>`;
}

export function stackElementInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-elements @rgrmdesign/rgrm-ds-tokens';
}

export function stackElementSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-elements/fonts';
import '@rgrmdesign/rgrm-ds-elements/stack';`;
}

export function stackElementUsageSnippet({ gap }: StackStoryArgs): string {
  const gapAttr = gap && gap !== '-' ? ` gap="${gap}"` : '';
  return `<rgrm-stack${gapAttr}>
  <h2>Title</h2>
  <p>Body copy.</p>
  <button type="button">Action</button>
</rgrm-stack>`;
}

export function stackDocsSource(snippet: (args: StackStoryArgs) => string): {
  transform: (_code: string, context: { args: StackStoryArgs }) => string;
} {
  return {
    transform: (_code, context) => snippet(context.args),
  };
}
