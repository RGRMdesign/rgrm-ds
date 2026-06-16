import { Button, Inline } from '@rgrmdesign/rgrm-ds-react';

export function InlineDemo() {
  return (
    <>
      <p className='sandbox-section__label'>Inline layout</p>
      <Inline gap='md'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </Inline>
    </>
  );
}
