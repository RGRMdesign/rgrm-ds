import '@rgrmdesign/rgrm-ds-css/section';
import '@rgrmdesign/rgrm-ds-css/heading';
import '@rgrmdesign/rgrm-ds-css/paragraph';

import { headingClassNames } from '@rgrmdesign/rgrm-ds-core/heading';
import { paragraphClassNames } from '@rgrmdesign/rgrm-ds-core/paragraph';
import { sectionClassNames, sectionContainerClassNames } from '@rgrmdesign/rgrm-ds-core/section';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { createElement, type ReactNode } from 'react';

import {
  SECTION_BACKGROUND_SRC,
  sectionArgTypes,
  sectionCssClassArgTypes,
  sectionFixtures,
  type SectionStoryArgs,
} from './fixtures';
import { sectionCssUsageSnippet, sectionDocsSource } from './snippets';

const meta = {
  title: 'Wrappers/Section/CSS',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Vanilla HTML via `@rgrmdesign/rgrm-ds-css/section`. Apply `.rgrm-section` plus spacing modifiers, set `data-theme`, and wrap content in `.rgrm-section__container`. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: sectionDocsSource(sectionCssUsageSnippet),
    },
  },
  argTypes: {
    ...sectionArgTypes,
    ...sectionCssClassArgTypes,
  },
  render: ({
    theme,
    spacingTop,
    spacingBottom,
    width,
    withBackground,
    heading,
    body,
  }: SectionStoryArgs) => {
    const children: ReactNode[] = [];
    if (withBackground) {
      children.push(
        createElement(
          'div',
          { className: 'rgrm-section__background', key: 'bg' },
          createElement('img', { src: SECTION_BACKGROUND_SRC, alt: '' }),
        ),
      );
    }
    children.push(
      createElement('div', { className: sectionContainerClassNames(width), key: 'container' }, [
        createElement('h2', { className: headingClassNames(2), key: 'heading' }, heading),
        createElement('p', { className: paragraphClassNames(), key: 'body' }, body),
      ]),
    );

    return createElement(
      'section',
      {
        className: sectionClassNames({ spacingTop, spacingBottom }),
        ...(theme && theme !== 'root' ? { 'data-theme': theme } : {}),
      },
      children,
    );
  },
} satisfies Meta<SectionStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { name: 'Default', args: sectionFixtures.default };
export const Dark: Story = { name: 'Dark theme', args: sectionFixtures.dark };
export const Brand: Story = { name: 'Brand theme', args: sectionFixtures.brand };
export const WidthSmall: Story = { name: 'Width: small', args: sectionFixtures.widthSmall };
export const WidthFull: Story = { name: 'Width: full', args: sectionFixtures.widthFull };
export const PageTop: Story = { name: 'Spacing: page-top', args: sectionFixtures.pageTop };
export const Background: Story = { name: 'Background media', args: sectionFixtures.background };
