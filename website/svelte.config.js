import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    scss: {
      includePaths: ['../node_modules']
    }
  }),
  kit: {
    adapter: adapter(),
    alias: {
      '@uui': '../node_modules/@defense-unicorns/unicorn-ui/src/lib',
      '@uui/*': '../node_modules/@defense-unicorns/unicorn-ui/src/lib/*'
    }
  }
};

export default config;
