/* eslint-disable */
const withLess = require('@zeit/next-less')

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

module.exports = withLess({
  publicRuntimeConfig: {
    offlineMode: !!process.env.OFFLINE,
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
})
