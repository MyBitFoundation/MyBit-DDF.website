const withCss = require('@zeit/next-css')

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}

module.exports = withCss({
    publicRuntimeConfig: {
    offlineMode: !!process.env.OFFLINE,
  },
})

// /* eslint-disable */
// const withLess = require('@zeit/next-less')

// // fix: prevents error when .less files are required by node
// if (typeof require !== 'undefined') {
//   require.extensions['.less'] = (file) => {}
// }

// module.exports = withLess({
//   publicRuntimeConfig: {
//     offlineMode: !!process.env.OFFLINE,
//   },
//   lessLoaderOptions: {
//     javascriptEnabled: true,
//   },
//   // webpack(config, options) {
//   //   const { dev, isServer } = options;
//   //   config.module.rules.push({
//   //     test: /\.svg$/,
//   //     use: [
//   //       {
//   //         loader: "svg-inline-loader",
//   //         options: {
//   //           jsx: true // true outputs JSX tags
//   //         }
//   //       }
//   //     ]
//   //   });
//   //   return config;
//   // }
// })
