import type { DividerStoryArgs } from './fixtures';

const TOKENS_IMPORT = "import '@rgrmdesign/rgrm-ds-tokens';";

export function dividerReactInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-react @rgrmdesign/rgrm-ds-tokens react';
}

export function dividerReactSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-react/fonts';
import { Divider } from '@rgrmdesign/rgrm-ds-react/divider';`;
}

export function dividerReactUsageSnippet({ className }: DividerStoryArgs): string {
  const classNameProp = className ? ` className="${className}"` : '';

  return `<Divider${classNameProp} />`;
}

export function dividerCssInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-css @rgrmdesign/rgrm-ds-tokens';
}

export function dividerCssSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-css/fonts';
import '@rgrmdesign/rgrm-ds-css/divider';`;
}

export function dividerCssUsageSnippet(): string {
  return '<hr class="rgrm-divider" />';
}

export function dividerElementInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-elements @rgrmdesign/rgrm-ds-tokens';
}

export function dividerElementSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-elements/fonts';
import '@rgrmdesign/rgrm-ds-elements/divider';`;
}

export function dividerElementUsageSnippet(): string {
  return '<rgrm-divider></rgrm-divider>';
}

export function dividerDocsSource(snippet: (args: DividerStoryArgs) => string): {
  transform: (_code: string, context: { args: DividerStoryArgs }) => string;
} {
  return {
    transform: (_code, context) => snippet(context.args),
  };
}
