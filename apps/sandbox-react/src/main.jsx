import '@rgrmdesign/rgrm-ds-tokens';
import 'sandbox-shared/chrome.css';
import { initThemeSwitcher } from 'sandbox-shared/theme.js';

import { createRoot } from 'react-dom/client';

import { ParagraphDemo } from './ParagraphDemo.jsx';

initThemeSwitcher();

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(<ParagraphDemo />);
}
