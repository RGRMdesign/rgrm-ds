import '@rgrmdesign/rgrm-ds-tokens';
import '@rgrmdesign/rgrm-ds-react/fonts';
import 'sandbox-shared/chrome.css';
import { initThemeSwitcher } from 'sandbox-shared/theme.js';

import { createRoot } from 'react-dom/client';

import { ButtonDemo } from './ButtonDemo.jsx';
import { HeadingDemo } from './HeadingDemo.jsx';
import { ParagraphDemo } from './ParagraphDemo.jsx';
import { SectionDemo } from './SectionDemo.jsx';

initThemeSwitcher();

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <>
      <HeadingDemo />
      <ParagraphDemo />
      <ButtonDemo />
    </>,
  );
}

const sections = document.getElementById('sections');
if (sections) {
  createRoot(sections).render(<SectionDemo />);
}
