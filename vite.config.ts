import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  // ⚠️ ប្រើ './' ដើម្បីឱ្យ GitHub Pages រកឃើញ CSS និង JS ឃើញត្រឹមត្រូវ
  base: './', 
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        menu: resolve(__dirname, 'menu.html'),
        orders: resolve(__dirname, 'orders.html'),
      },
    },
  },
});