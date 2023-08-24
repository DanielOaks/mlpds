export { getPageTitle, getPageDescription }

function getPageTitle(pageContext: {
  exports: { frontmatter?: { title: string }, documentProps?: { title: string } }
  documentProps?: { title: string }
}): string {
  const title =
    // For markdown titles
    (pageContext.exports.frontmatter || {}).title ||
    // For static titles (defined in the `export { documentProps }` of the page's `.page.js`)
    (pageContext.exports.documentProps || {}).title ||
    // For dynamic tiles (defined in the `export addContextProps()` of the page's `.page.server.js`)
    (pageContext.documentProps || {}).title ||
    'MLPDS'
  return title
}

function getPageDescription(pageContext: {
  exports: { frontmatter?: { description: string }, documentProps?: { description: string } }
  documentProps?: { description: string }
}): string {
  const title =
    // For markdown descriptions
    (pageContext.exports.frontmatter || {}).description ||
    // For static titles (defined in the `export { documentProps }` of the page's `.page.js`)
    (pageContext.exports.documentProps || {}).description ||
    // For dynamic tiles (defined in the `export addContextProps()` of the page's `.page.server.js`)
    (pageContext.documentProps || {}).description ||
    "We're a supportive and nurturing art community, focused on learning and sharing!"
  return title
}
