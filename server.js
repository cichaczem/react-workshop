var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack/development.config.js');
config.entry.unshift("webpack-dev-server/client?http://localhost:1337", "webpack/hot/dev-server");

var port = 1337;
var ip = '127.0.0.1';
new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    stats: { chunks: false }
}).listen(port, ip, function (err) {
    if(err) {
      return console.log(err);
    }
    console.log('Listening at ' + ip + ':' + port);
});
