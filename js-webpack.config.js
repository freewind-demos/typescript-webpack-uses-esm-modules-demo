module.exports = {
  mode: "development",
  entry: './index-js.js',
  output: {
    path: __dirname,
    filename: 'dist/bundle-js.js'
  },
  resolve: {
    mainFields: ['module']
  }
}
