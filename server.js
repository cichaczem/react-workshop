var webpack = require('webpack');
var WebpackDevMiddleware = require('webpack-dev-middleware');
var WebpackHotMiddleware = require('webpack-hot-middleware');
var Express = require('express');
var http = require('http');
var path = require('path');

var config = require('./webpack/development.config.js');
var defaultConfig = require('./webpack/default.config.js');

var port = 1337;
var ip = '127.0.0.1';

var app = Express();

var compiler = webpack(config);
app.use(Express.static(defaultConfig.Public));

app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  stats: { chunks: false }
}));

app.use(WebpackHotMiddleware(compiler, {
  path: '/__webpack_hmr'
}));

app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

http.createServer(app).listen(port, ip, function (err) {
  if(err) {
    return console.log(err);
  }
  console.log('Listening at ' + ip + ':' + port);
});
