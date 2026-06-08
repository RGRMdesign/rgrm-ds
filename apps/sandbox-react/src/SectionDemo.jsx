import { Button, Heading, Paragraph, Section } from '@rgrmdesign/rgrm-ds-react';

const THEMES = [
  {
    theme: 'root',
    title: 'Root theme',
    body: 'Themed section using the default root theme. Background and text colour come from the theme tokens that cascade onto the section content.',
  },
  {
    theme: 'dark',
    title: 'Dark theme',
    body: 'The same section with theme="dark". The heading, paragraph and button all inherit the dark theme tokens.',
  },
  {
    theme: 'brand',
    title: 'Brand theme',
    body: 'The same section with theme="brand". Themed sections let you switch the palette per band without touching the content.',
  },
];

export function SectionDemo() {
  return (
    <>
      {THEMES.map(({ theme, title, body }) => (
        <Section key={theme} theme={theme} spacingTop="small" spacingBottom="small">
          <Heading level={2}>{title}</Heading>
          <Paragraph>{body}</Paragraph>
          <div className="sandbox-row">
            <Button variant="primary">Primary button</Button>
          </div>
        </Section>
      ))}
    </>
  );
}
