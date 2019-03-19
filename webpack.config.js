const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [{
  mode: 'development',
  entry: './src/javascripts/application.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/javascripts')
  },
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
      },
    ]
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    })
  ]
}, {
  mode: 'development',
  entry: './src/index.html',
  output: {
    path: path.join(__dirname, 'public/')
  },
  module: {
    rules: [{
      test: /\.html$/,
      loader: "html-loader",
    }]
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ],
}]
