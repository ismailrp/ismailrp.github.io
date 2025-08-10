import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ismailrp.github.io', // Ganti 'username' dengan username GitHub Anda
  base: '/repository-name', // Ganti dengan nama repository Anda, atau hapus jika menggunakan username.github.io
  outDir: './dist',
  publicDir: './public',
  build: {
    assets: 'assets'
  }
});

// Jika repository Anda bernama username.github.io, gunakan ini:
// export default defineConfig({
//   site: 'https://username.github.io',
//   outDir: './dist',
//   publicDir: './public'
// });