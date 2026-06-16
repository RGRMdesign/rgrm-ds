import { Button, Heading, Paragraph, Stack } from '@rgrmdesign/rgrm-ds-react';

export function StackDemo() {
  return (
    <>
      <p className='sandbox-section__label'>Stack layout</p>
      <Stack gap='md'>
        <Heading level={3}>Stack title</Heading>
        <Paragraph>Vertical rhythm with a medium gap between children.</Paragraph>
        <Button>Action</Button>
      </Stack>
    </>
  );
}
