import rss from '@astrojs/rss'
// @ts-ignore
import { description, title } from './blog.astro'

const postImportResult = import.meta.glob('/src/posts/**/*.mdx', {
  eager: true,
})
const posts: any[] = Object.values(postImportResult)

export const get = () =>
  rss({
    title: title,
    description: description,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: '/blog/' + post.frontmatter.slug,
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      pubDate: post.frontmatter.pubDate,
    })),
    customData: `<language>en-us</language>`,
  })
