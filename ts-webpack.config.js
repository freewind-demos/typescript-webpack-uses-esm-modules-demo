module.exports = {
  mode: "development",
  entry: './index-ts.ts',
  output: {
    path: __dirname,
    filename: 'dist/bundle-ts.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    mainFiles: ['module']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader'
    }]
  },
}
