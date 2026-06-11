/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    // BEM (.rgrm-block__element--modifier) and sandbox class names.
    'selector-class-pattern': null,
    // Private cascade variables (--_section-*) and token names (--rgrm-*).
    'custom-property-pattern': null,
    'order/properties-alphabetical-order': true,
  },
  ignoreFiles: ['**/dist/**', '**/node_modules/**', '**/storybook-static/**'],
};
