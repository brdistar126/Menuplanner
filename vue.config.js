module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  css: {
    extract: false
  },
  rules: [
    {
      test: /\.svg$/,
      loader: 'vue-svg-loader' // `vue-svg` for webpack 1.x
    }
  ]
}
