export function remarkSlugGenerator() {
  return function (_tree, file) {
    const slug = file.history[0].replace(/\.mdx?$/, '').replace(/^.*\//, '')
    file.data.astro.frontmatter.slug = slug
  }
}
