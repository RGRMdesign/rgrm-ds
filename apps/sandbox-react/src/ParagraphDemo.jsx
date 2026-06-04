import { Paragraph } from '@rgrmdesign/paragraph-react';

export function ParagraphDemo() {
  return (
    <>
      <Paragraph size="large">
        Large lead paragraph (React). Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Paragraph>
      <Paragraph>
        Default body paragraph (React). The quick brown fox jumps over the lazy dog while
        typography scales with the design tokens.
      </Paragraph>
      <Paragraph size="small">
        Small paragraph (React) for captions and fine print.
      </Paragraph>
    </>
  );
}
