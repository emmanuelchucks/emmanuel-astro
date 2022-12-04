import rss from '@astrojs/rss'
import { description, title } from './blog.astro'

export const get = () =>
  rss({
    title: title,
    description: description,
    site: import.meta.env.SITE,
    items: import.meta.glob('./blog/*.md'),
    customData: `<language>en-us</language>`,
  })
