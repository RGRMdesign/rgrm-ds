import { Badge } from '@rgrmdesign/rgrm-ds-react/badge';
import { Link, Paragraph } from '@rgrmdesign/rgrm-ds-react';

export function BadgeDemo() {
  return (
    <>
      <Paragraph>
        Inline badge example: <Badge>Nieuw</Badge> next to body copy.
      </Paragraph>
      <Paragraph>
        Combined with a link: <Link href='https://example.com'>Meer info</Link>{' '}
        <Badge>Actief</Badge>
      </Paragraph>
    </>
  );
}
