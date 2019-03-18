const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries")

module.exports = [{
  mode: 'development',
  entry: './src/javascripts/application.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/javascripts')
  }
}, {
  mode: 'development',
  entry: './src/stylesheets/application.scss',
  output: {
    path: path.resolve(__dirname, 'public/stylesheets')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    })
  ]
}]
