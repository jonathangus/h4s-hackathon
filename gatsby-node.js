const path = require('path')
const crypto = require('crypto')

const pages = [
  {
    url: 'co-working',
    title: 'Co-working space',
  },
  {
    url: 'fast-track',
    title: 'Fast Track Program',
  },
  {
    url: 'incubator',
    title: 'Incubator Program',
  },
  {
    url: 'mentorship',
    title: 'Mentorship / Consultant',
  },
  {
    url: 'domain',
    title: 'Domain, storage etc',
  },
  {
    url: 'other',
    title: 'Other',
  },
]
exports.sourceNodes = async ({ actions }) => {
  const template = path.resolve(`src/templates/prizeCategory.js`)

  const { createPage } = actions
  return new Promise(resolve => {
    pages.forEach(page =>
      createPage({
        path: page.url,
        component: template,
        context: {
          page,
          pageId: page.url,
        },
      })
    )

    resolve()
  })
}
exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    }
  }
}
