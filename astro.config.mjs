import image from '@astrojs/image'
import mdx from '@astrojs/mdx'
import solidJs from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import { remarkReadingTime } from './scripts/remark-reading-time.mjs'
import { remarkSlugGenerator } from './scripts/remark-slug-generator.mjs'

export default defineConfig({
  site: 'https://www.emmanuelchucks.com',
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkSlugGenerator],
    extendDefaultPlugins: true,
  },
  integrations: [
    tailwind(),
    solidJs(),
    mdx(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
})
