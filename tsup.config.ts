import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  minify: true,
  injectStyle: true, // This is key!
  external: ['react', 'framer-motion', 'lucide-react'],
});