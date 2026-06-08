import { headingClassNames } from '@rgrmdesign/rgrm-ds-core/heading';

import type { HeadingStoryArgs } from './fixtures';

const TOKENS_IMPORT = "import '@rgrmdesign/rgrm-ds-tokens';";

function formatLevelProp(level?: HeadingStoryArgs['level']): string {
  return level ? ` level={${level}}` : '';
}

function formatAppearanceProp(appearance?: HeadingStoryArgs['appearance'], level?: HeadingStoryArgs['level']): string {
  if (appearance === undefined || appearance === level) {
    return '';
  }
  return appearance === 'display' ? ' appearance="display"' : ` appearance={${appearance}}`;
}

export function headingReactInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-react @rgrmdesign/rgrm-ds-tokens react';
}

export function headingReactSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import { Heading } from '@rgrmdesign/rgrm-ds-react';`;
}

export function headingReactUsageSnippet({ level, appearance, children }: HeadingStoryArgs): string {
  const levelProp = formatLevelProp(level);
  const appearanceProp = formatAppearanceProp(appearance, level);
  return `<Heading${levelProp}${appearanceProp}>${children}</Heading>`;
}

export function headingCssInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-css @rgrmdesign/rgrm-ds-tokens';
}

export function headingCssSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-css/heading';`;
}

export function headingCssUsageSnippet({ level, appearance, children }: HeadingStoryArgs): string {
  const tag = `h${level ?? 2}`;
  const resolvedAppearance = appearance ?? level ?? 2;
  const className = headingClassNames(resolvedAppearance);
  return `<${tag} class="${className}">${children}</${tag}>`;
}

export function headingElementInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-elements @rgrmdesign/rgrm-ds-tokens';
}

export function headingElementSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-elements/heading';`;
}

function formatLevelAttr(level?: HeadingStoryArgs['level']): string {
  return level ? ` level="${level}"` : '';
}

function formatAppearanceAttr(appearance?: HeadingStoryArgs['appearance'], level?: HeadingStoryArgs['level']): string {
  if (appearance === undefined || appearance === level) {
    return '';
  }
  return ` appearance="${appearance}"`;
}

export function headingElementUsageSnippet({ level, appearance, children }: HeadingStoryArgs): string {
  const levelAttr = formatLevelAttr(level);
  const appearanceAttr = formatAppearanceAttr(appearance, level);
  return `<rgrm-heading${levelAttr}${appearanceAttr}>${children}</rgrm-heading>`;
}

export function headingDocsSource(snippet: (args: HeadingStoryArgs) => string): {
  transform: (_code: string, context: { args: HeadingStoryArgs }) => string;
} {
  return {
    // Do not set type: 'code' — that skips the JSX source decorator and the Code
    // panel falls back to raw CSF source (`{ args: … }`) without transform.
    transform: (_code, context) => snippet(context.args),
  };
}
