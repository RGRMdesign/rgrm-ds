import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/fonts.ts',
    'src/index.ts',
    'src/button/index.ts',
    'src/heading/index.ts',
    'src/inline/index.ts',
    'src/link/index.ts',
    'src/paragraph/index.ts',
    'src/root/index.ts',
    'src/section/index.ts',
    'src/stack/index.ts',
  ],
  format: ['esm'],
  dts: true,
  sourcemap: true,
  clean: !process.argv.includes('--watch'),
});
