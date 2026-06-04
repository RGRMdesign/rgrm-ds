/** Wire up Root / Dark / Brand buttons with [data-set-theme]. */
export function initThemeSwitcher() {
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
}
