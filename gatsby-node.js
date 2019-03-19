const path = require('path')

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (page.path.includes('404')) {
    return Promise.resolve()
  }

  return new Promise(resolve => {
    const newPath = page.path === '/' ? '/' : page.path.slice(0, -1)
    const newPage = {
      ...page,
      path: `/sv${newPath}`,
      context: { locale: 'sv-SE' },
    }
    const newPage2 = {
      ...page,
      path: newPath,
      context: { locale: 'en-US' },
    }
    deletePage(page)
    createPage(newPage)
    createPage(newPage2)
    resolve()
  })
}
