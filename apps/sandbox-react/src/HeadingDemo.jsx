import { Heading } from '@rgrmdesign/rgrm-ds-react';

export function HeadingDemo() {
  return (
    <>
      <Heading level={1} appearance="display">
        Display heading (React)
      </Heading>
      <Heading level={1}>Heading level 1 (React)</Heading>
      <Heading level={2}>Heading level 2 (React)</Heading>
      <Heading level={3}>Heading level 3 (React)</Heading>
      <Heading level={4}>Heading level 4 (React)</Heading>
      <Heading level={5}>Heading level 5 (React)</Heading>
      <Heading level={6}>Heading level 6 (React)</Heading>
    </>
  );
}
