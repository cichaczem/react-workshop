var path = require('path');
var Webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DefaultConfig = require('./default.config.js');

module.exports = {
  devtool: 'source-map',
  entry: ['webpack-hot-middleware/client?reload=true'].
    concat(DefaultConfig.Entries),
  output: {
    path: DefaultConfig.Dist,
    publicPath: '/',
    filename: DefaultConfig.BundleName + '.js'
  },
  module: {
    loaders: DefaultConfig.Loaders
  },
  plugins: [
    new Webpack.optimize.OccurenceOrderPlugin(),
    new Webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin(DefaultConfig.BundleName + '.css'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'views', 'index.html'),
      inject: 'body',
      filename: 'index.html'
    })
  ]
};
