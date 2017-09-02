const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = {
  entry: {
    main: path.join(process.cwd(), 'src/index.js'),
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: './',
  },
  externals: {
    AppConfig: JSON.stringify(require('../configs/production.json')),
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
      compress: {
        // drop_console: true,
        warnings: false,
        screw_ie8: true,
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => /node_modules/.test(resource),
    }),
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      platform: process.env.PLATFORM || 'cordova',
      inject: true,
    }),
  ],
}

module.exports = require('./base.config')(webpackConfig)
