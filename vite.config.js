import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig(({ command }) => ({
  root: 'src',
  base: './',
  build: {
    outDir: '../dist',
    sourcemap: true,
    rollupOptions: {
      input: glob.sync('./src/*.html'),
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
        },
        entryFileNames: 'commonHelpers.js',
      },
    },
  },
  plugins: [injectHTML(), FullReload(['./src/**/*.html'])],
}));
