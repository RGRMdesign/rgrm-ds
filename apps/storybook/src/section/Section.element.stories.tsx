import '@rgrmdesign/rgrm-ds-elements/section';
import '@rgrmdesign/rgrm-ds-elements/heading';
import '@rgrmdesign/rgrm-ds-elements/paragraph';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { createElement, type ReactNode } from 'react';

import {
  SECTION_BACKGROUND_SRC,
  sectionElementArgTypes,
  sectionFixtures,
  type SectionStoryArgs,
} from './fixtures';
import { sectionDocsSource, sectionElementUsageSnippet } from './snippets';

const meta = {
  title: 'Wrappers/Section/Element',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Web component via `@rgrmdesign/rgrm-ds-elements/section` (`<rgrm-section>`). Loads `@rgrmdesign/rgrm-ds-css/section` on import. Mark a child with `slot="background"` to render it in the background layer. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: sectionDocsSource(sectionElementUsageSnippet),
    },
  },
  argTypes: sectionElementArgTypes,
  render: ({
    theme,
    spacingTop,
    spacingBottom,
    width,
    withBackground,
    heading,
    body,
  }: SectionStoryArgs) => {
    const attrs: Record<string, string> = {};
    if (theme && theme !== 'root') attrs.theme = theme;
    if (spacingTop && spacingTop !== 'main') attrs['spacing-top'] = spacingTop;
    if (spacingBottom && spacingBottom !== 'main') attrs['spacing-bottom'] = spacingBottom;
    if (width && width !== 'main') attrs.width = width;

    const children: ReactNode[] = [];
    if (withBackground) {
      children.push(
        createElement('img', {
          key: 'bg',
          slot: 'background',
          src: SECTION_BACKGROUND_SRC,
          alt: '',
        }),
      );
    }
    children.push(createElement('rgrm-heading', { key: 'heading', level: '2' }, heading));
    children.push(createElement('rgrm-paragraph', { key: 'body' }, body));

    return createElement('rgrm-section', attrs, children);
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
