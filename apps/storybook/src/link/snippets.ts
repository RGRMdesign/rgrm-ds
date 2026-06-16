import type { LinkStoryArgs } from './fixtures';

const TOKENS_IMPORT = "import '@rgrmdesign/rgrm-ds-tokens';";

export function linkReactInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-react @rgrmdesign/rgrm-ds-tokens react';
}

export function linkReactSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-react/fonts';
import { Link } from '@rgrmdesign/rgrm-ds-react/link';`;
}

export function linkReactUsageSnippet({ href, children }: LinkStoryArgs): string {
  return `<Link href="${href}">${children}</Link>`;
}

export function linkCssInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-css @rgrmdesign/rgrm-ds-tokens';
}

export function linkCssSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-css/fonts';
import '@rgrmdesign/rgrm-ds-css/link';`;
}

export function linkCssUsageSnippet({ href, children }: LinkStoryArgs): string {
  return `<a class="rgrm-link" href="${href}">${children}</a>`;
}

export function linkElementInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-elements @rgrmdesign/rgrm-ds-tokens';
}

export function linkElementSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-elements/fonts';
import '@rgrmdesign/rgrm-ds-elements/link';`;
}

export function linkElementUsageSnippet({ href, children }: LinkStoryArgs): string {
  return `<rgrm-link href="${href}">${children}</rgrm-link>`;
}

export function linkDocsSource(snippet: (args: LinkStoryArgs) => string): {
  transform: (_code: string, context: { args: LinkStoryArgs }) => string;
} {
  return {
    transform: (_code, context) => snippet(context.args),
  };
}
