import type { RootStoryArgs } from './fixtures';

const TOKENS_IMPORT = "import '@rgrmdesign/rgrm-ds-tokens';";

export function rootReactInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-react @rgrmdesign/rgrm-ds-tokens react';
}

export function rootReactSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-react/fonts';
import { Root } from '@rgrmdesign/rgrm-ds-react/root';`;
}

export function rootReactUsageSnippet({ children }: RootStoryArgs): string {
  return `<Root>
  <p>${children}</p>
</Root>`;
}

export function rootCssInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-css @rgrmdesign/rgrm-ds-core @rgrmdesign/rgrm-ds-tokens';
}

export function rootCssSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-css/fonts';
import '@rgrmdesign/rgrm-ds-css/root';
import { applyRootDocumentClasses } from '@rgrmdesign/rgrm-ds-core/root';

applyRootDocumentClasses();`;
}

export function rootCssUsageSnippet({ children }: RootStoryArgs): string {
  return `<!-- Classes are applied to html and body via applyRootDocumentClasses() -->
<p>${children}</p>`;
}

export function rootElementInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-elements @rgrmdesign/rgrm-ds-tokens';
}

export function rootElementSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-elements/fonts';
import '@rgrmdesign/rgrm-ds-elements/root';`;
}

export function rootElementUsageSnippet({ children }: RootStoryArgs): string {
  return `<body>
  <rgrm-root></rgrm-root>
  <p>${children}</p>
</body>`;
}

export function rootDocsSource(usageSnippet: (args: RootStoryArgs) => string) {
  return {
    transform: (_code: string, storyContext: { args: RootStoryArgs }) =>
      usageSnippet(storyContext.args),
  };
}
