// // @ts-check
// import { defineConfig } from 'astro/config';

// // https://astro.build/config
// export default defineConfig({});
import { defineConfig } from 'astro/config';
import fs from 'fs';
// import github from '@astrojs/github';

export default defineConfig({
  site: 'https://ismailrp.github.io',
  integrations: [],
//   adapter: github(),
  vite: {
    buildEnd() {
      fs.writeFileSync('./dist/.nojekyll', '');
    }
  }
});
