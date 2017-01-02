/* eslint-disable */
var  path = require( 'path');
var webpack =  require('webpack');

module.exports = {
  // entry point for the bundle, path and filename
  entry: ['./src/controllers/index.js'],
  // output directory as an absolute path
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '/bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', 
        query: { 
          presets: ['latest', 'stage-2' ],
        },
      },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
  devServer: {
    proxy: {
      '*': {
        target: 'http://localhost:4000',
        secure: false,
      },
    },
    stats: {
      colors: true,
    },
  },
  devtool: 'source-map',
};
