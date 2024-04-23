// vite.config.ts

import { defineConfig } from 'vite';
import FullReload from 'vite-plugin-full-reload';
import ViteRuby from 'vite-plugin-ruby';
import StimulusHMR from 'vite-plugin-stimulus-hmr';

export default defineConfig({
  clearScreen: false,
  plugins: [
    ViteRuby(),
    StimulusHMR(),
    FullReload(["config/routes.rb", "app/views/**/*"], { delay: 300 }),
  ],
});
