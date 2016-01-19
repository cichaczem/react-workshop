var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  BundleName: 'bundle',
  Dist: path.join(__dirname, '..', 'dist'),
  Public: path.join(__dirname, '..', 'public'),
  Entries: [
    path.join(__dirname, '..', 'src', 'application.js'),
    path.join(__dirname, '..', 'css', 'application.scss')
  ],
  Loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ["babel-loader"]
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
    }, {
      test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
      loader: 'url-loader?limit=100000'
    }
  ]
};
