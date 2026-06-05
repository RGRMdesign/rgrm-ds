import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/heading/index.ts', 'src/paragraph/index.ts', 'src/section/index.ts'],
  format: ['esm'],
  dts: true,
  sourcemap: true,
  clean: true,
});
