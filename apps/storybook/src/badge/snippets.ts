import type { BadgeStoryArgs } from './fixtures';

const TOKENS_IMPORT = "import '@rgrmdesign/rgrm-ds-tokens';";

export function badgeReactInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-react @rgrmdesign/rgrm-ds-tokens react';
}

export function badgeReactSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-react/fonts';
import { Badge } from '@rgrmdesign/rgrm-ds-react/badge';`;
}

export function badgeReactUsageSnippet({ children }: BadgeStoryArgs): string {
  return `<Badge>${children}</Badge>`;
}

export function badgeCssInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-css @rgrmdesign/rgrm-ds-tokens';
}

export function badgeCssSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-css/fonts';
import '@rgrmdesign/rgrm-ds-css/badge';`;
}

export function badgeCssUsageSnippet({ children }: BadgeStoryArgs): string {
  return `<span class="rgrm-badge">${children}</span>`;
}

export function badgeElementInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-elements @rgrmdesign/rgrm-ds-tokens';
}

export function badgeElementSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-elements/fonts';
import '@rgrmdesign/rgrm-ds-elements/badge';`;
}

export function badgeElementUsageSnippet({ children }: BadgeStoryArgs): string {
  return `<rgrm-badge>${children}</rgrm-badge>`;
}

export function badgeDocsSource(snippet: (args: BadgeStoryArgs) => string): {
  transform: (_code: string, context: { args: BadgeStoryArgs }) => string;
} {
  return {
    transform: (_code, context) => snippet(context.args),
  };
}
