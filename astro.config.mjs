import image from '@astrojs/image'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import { remarkReadingTime } from './scripts/remark-reading-time.mjs'

// https://astro.build/config
import solidJs from '@astrojs/solid-js'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.emmanuelchucks.com',
  markdown: {
    remarkPlugins: [remarkReadingTime],
    extendDefaultPlugins: true,
  },
  integrations: [
    tailwind(),
    solidJs(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
})
