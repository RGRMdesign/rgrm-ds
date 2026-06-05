import { Heading, Paragraph, Section } from '@rgrmdesign/rgrm-ds-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  SECTION_BACKGROUND_SRC,
  disableDocgenExtractArgTypes,
  sectionFixtures,
  sectionReactArgTypes,
  type SectionStoryArgs,
} from './fixtures';
import { sectionDocsSource, sectionReactUsageSnippet } from './snippets';

const meta = {
  title: 'Wrappers/Section/React',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'React wrapper via `@rgrmdesign/rgrm-ds-react`. Loads `@rgrmdesign/rgrm-ds-css` automatically. Requires `@rgrmdesign/rgrm-ds-tokens` in the app (or Storybook preview).',
      },
      source: sectionDocsSource(sectionReactUsageSnippet),
      extractArgTypes: disableDocgenExtractArgTypes,
    },
  },
  argTypes: sectionReactArgTypes,
  render: ({
    theme,
    spacingTop,
    spacingBottom,
    width,
    withBackground,
    heading,
    body,
  }: SectionStoryArgs) => (
    <Section
      theme={theme}
      spacingTop={spacingTop}
      spacingBottom={spacingBottom}
      width={width}
      background={withBackground ? <img src={SECTION_BACKGROUND_SRC} alt="" /> : undefined}
    >
      <Heading level={2}>{heading}</Heading>
      <Paragraph>{body}</Paragraph>
    </Section>
  ),
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
