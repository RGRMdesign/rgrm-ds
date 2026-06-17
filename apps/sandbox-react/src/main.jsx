import '@rgrmdesign/rgrm-ds-tokens';
import { Root } from '@rgrmdesign/rgrm-ds-react/root';
import '@rgrmdesign/rgrm-ds-react/fonts';
import 'sandbox-shared/chrome.css';
import { initThemeSwitcher } from 'sandbox-shared/theme.js';

import { createRoot } from 'react-dom/client';

import { BadgeDemo } from './BadgeDemo.jsx';
import { ButtonDemo } from './ButtonDemo.jsx';
import { HeadingDemo } from './HeadingDemo.jsx';
import { InlineDemo } from './InlineDemo.jsx';
import { ParagraphDemo } from './ParagraphDemo.jsx';
import { SectionDemo } from './SectionDemo.jsx';
import { StackDemo } from './StackDemo.jsx';

initThemeSwitcher();

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <Root>
      <HeadingDemo />
      <ParagraphDemo />
      <BadgeDemo />
      <InlineDemo />
      <StackDemo />
      <ButtonDemo />
    </Root>,
  );
}

const sections = document.getElementById('sections');
if (sections) {
  createRoot(sections).render(
    <Root>
      <SectionDemo />
    </Root>,
  );
}
