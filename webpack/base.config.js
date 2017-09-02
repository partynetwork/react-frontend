/**
 * COMMON WEBPACK CONFIGURATION
 */
const path = require('path')
const webpack = require('webpack')

module.exports = options => ({
  entry: options.entry,
  output: Object.assign({
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: './',
  }, options.output), // Merge with env dependent settings
  module: {
    loaders: [
      {
        test: /\.js$/, // Transform all .js files required somewhere with Babel
        loaders: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
      {
        test: /\.css/,
        loaders: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(process.cwd(), 'node_modules/bootstrap/scss/'),
        ],
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[local]',
          'sass-loader',
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[local]__[hash:base64:6]',
          'sass-loader',
        ],
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
      {
        test: /\.(jpg|png|gif)$/,
        loaders: [
          'file-loader',
          'image-webpack-loader',
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader',
      },
      {
        test: /\.(mp4|webm)$/,
        loader: 'url-loader?limit=10000',
      }],
  },
  plugins: options.plugins.concat([
    new webpack.ContextReplacementPlugin(/\.\/locale$/, 'empty-module', false, /js$/),

    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      __DEV__: false,
      __DEVTOOLS__: false,
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ]),
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.xml',
    ],
    mainFields: [
      'browser',
      'jsnext:main',
      'main',
    ],
    alias: {
      AppConfig: path.join(process.cwd(), `configs/${process.env.NODE_ENV}.json`),
      'bootstrap-reboot': path.join(process.cwd(), 'node_modules/bootstrap/scss/bootstrap-reboot.scss'),
    },
  },
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
})
