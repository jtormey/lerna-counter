const path = require('path')

let resolve = (f) => path.join(__dirname, f)
let buildPath = resolve('./build')

module.exports = {
  entry: resolve('./src'),
  output: {
    path: buildPath,
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['react']
        }
      }
    ]
  },
  devServer: {
    port: 8080
  }
}
