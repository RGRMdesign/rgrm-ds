import { BUTTON_LABEL_CLASS, buttonClassNames } from '@rgrmdesign/rgrm-ds-core/button';

import type { ButtonStoryArgs } from './fixtures';

const TOKENS_IMPORT = "import '@rgrmdesign/rgrm-ds-tokens';";

export function buttonReactInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-react @rgrmdesign/rgrm-ds-tokens react';
}

export function buttonReactSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-react/fonts';
import { Button } from '@rgrmdesign/rgrm-ds-react';`;
}

export function buttonReactUsageSnippet({ variant, children }: ButtonStoryArgs): string {
  const variantProp = variant ? ` variant="${variant}"` : '';
  return `<Button${variantProp}>${children}</Button>`;
}

export function buttonCssInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-css @rgrmdesign/rgrm-ds-tokens';
}

export function buttonCssSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-css/fonts';
import '@rgrmdesign/rgrm-ds-css/button';`;
}

export function buttonCssUsageSnippet({ variant, children }: ButtonStoryArgs): string {
  const className = buttonClassNames(variant);
  return `<button type="button" class="${className}"><span class="${BUTTON_LABEL_CLASS}">${children}</span></button>`;
}

export function buttonElementInstallSnippet(): string {
  return 'pnpm add @rgrmdesign/rgrm-ds-elements @rgrmdesign/rgrm-ds-tokens';
}

export function buttonElementSetupSnippet(): string {
  return `${TOKENS_IMPORT}
import '@rgrmdesign/rgrm-ds-elements/fonts';
import '@rgrmdesign/rgrm-ds-elements/button';`;
}

export function buttonElementUsageSnippet({ variant, children }: ButtonStoryArgs): string {
  const variantAttr = variant ? ` variant="${variant}"` : '';
  return `<rgrm-button${variantAttr}>${children}</rgrm-button>`;
}

export function buttonDocsSource(snippet: (args: ButtonStoryArgs) => string): {
  transform: (_code: string, context: { args: ButtonStoryArgs }) => string;
} {
  return {
    // Do not set type: 'code' — that skips the JSX source decorator and the Code
    // panel falls back to raw CSF source (`{ args: … }`) without transform.
    transform: (_code, context) => snippet(context.args),
  };
}
