import { headingClassNames } from '@rgrmdesign/rgrm-ds-core/heading';

import type { HeadingStoryArgs } from './fixtures';

const TOKENS_IMPORT = "import '@rgrmdesign/rgrm-ds-tokens';";

export function headingReactInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-react @rgrmdesign/rgrm-ds-tokens react';
}

export function headingReactSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import { Heading } from '@rgrmdesign/rgrm-ds-react';`;
}

export function headingReactUsageSnippet({ level, children }: HeadingStoryArgs): string {
  const levelProp = level === 'display' ? ' level="display"' : level ? ` level={${level}}` : '';
  return `<Heading${levelProp}>${children}</Heading>`;
}

export function headingCssInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-css @rgrmdesign/rgrm-ds-tokens';
}

export function headingCssSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-css/heading';`;
}

export function headingCssUsageSnippet({ level, children }: HeadingStoryArgs): string {
  const tag = level === 'display' ? 'h1' : `h${level ?? 2}`;
  const className = headingClassNames(level);
  return `<${tag} class="${className}">${children}</${tag}>`;
}

export function headingElementInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-elements @rgrmdesign/rgrm-ds-tokens';
}

export function headingElementSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-elements/heading';`;
}

export function headingElementUsageSnippet({ level, children }: HeadingStoryArgs): string {
  const levelAttr = level ? ` level="${level}"` : '';
  return `<rgrm-heading${levelAttr}>${children}</rgrm-heading>`;
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
