module.exports = {
  // Fixes errors on safari
  future: {
    webpack5: true,
  },
}

module.exports = {
  images: {
    domains: ['images.prismic.io'],
  },
}

// module.exports = {
//   webpack: (config, { isServer }) => {
//     // Fixes npm packages that depend on `fs` module
//     if (!isServer) {
//       config.node = {
//         fs: 'empty',
//       }
//     }
//     config.module.rules.push({
//       test: /\.js$/,
//       include: [/node_modules/],
//       loader: 'babel-loader',
//     })
//     return config
//   },
// }
