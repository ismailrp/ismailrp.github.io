// // @ts-check
// import { defineConfig } from 'astro/config';

// // https://astro.build/config
// export default defineConfig({});
import { defineConfig } from 'astro/config';
// import github from '@astrojs/github';

export default defineConfig({
  site: 'https://username.github.io',
  integrations: [],
//   adapter: github(),
});
