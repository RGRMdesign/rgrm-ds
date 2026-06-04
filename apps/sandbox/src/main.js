// Design tokens first so the custom properties are defined before the
// component stylesheets that consume them.
import '@rgrmdesign/rgrm-ds-tokens';
import '@rgrmdesign/heading';
import '@rgrmdesign/paragraph';

import './style.css';

const root = document.documentElement;
const buttons = document.querySelectorAll('[data-set-theme]');

for (const button of buttons) {
  button.addEventListener('click', () => {
    const theme = button.dataset.setTheme;
    root.dataset.theme = theme;

    for (const other of buttons) {
      other.setAttribute('aria-pressed', String(other === button));
    }
  });
}
