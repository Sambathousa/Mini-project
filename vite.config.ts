import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/Mini-project/', // <-- បន្ថែមបន្ទាត់នេះចូល (ត្រូវតែមានឈ្មោះ Repository របស់អ្នក)
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        menu: 'menu.html',
        about: 'about.html',
        gallery: 'gallery.html',
        contact: 'contact.html',
        orders: 'orders.html'
      }
    }
  }
});