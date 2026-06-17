import { Divider, Paragraph } from '@rgrmdesign/rgrm-ds-react';

export function DividerDemo() {
  return (
    <>
      <Paragraph>Content before the divider.</Paragraph>
      <Divider />
      <Paragraph size='small'>Content after the divider.</Paragraph>
    </>
  );
}
