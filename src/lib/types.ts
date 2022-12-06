export interface Frontmatter {
  slug: string
  title: string
  author: string
  pubDate: string
  description: string
  minutesRead: string
  tags: string[]
  image: {
    src: string
    alt: string
  }
}
