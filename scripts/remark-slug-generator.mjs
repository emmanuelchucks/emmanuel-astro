export function remarkSlugGenerator() {
  return function (_tree, file) {
    const parts = file.history[0].split('/')
    const slug = parts[parts.length - 2]
    file.data.astro.frontmatter.slug = slug
  }
}
