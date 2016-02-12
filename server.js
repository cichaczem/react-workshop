import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import Express from 'express';
import http from 'http';

import config from './webpack/development.config.js';
import defaultConfig from './webpack/default.config.js';

const port = 1337;
const ip = '127.0.0.1';

const app = Express();

const compiler = webpack(config);
app.use(Express.static(defaultConfig.Public));

app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  stats: { chunks: false }
}));

app.use(WebpackHotMiddleware(compiler, {
  path: '/__webpack_hmr'
}));

const indexHtml = () => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Lunars School of Witchcraft and Wizardry</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href='https://fonts.googleapis.com/css?family=Dosis:400,300,700' rel='stylesheet' type='text/css'>
      <link rel="shortcut icon" type="image/png" href="/favicon.ico"/>
      <link href="/bundle.css" rel="stylesheet" type="text/css" />
    </head>
    <body>
      <div id="app"></div>
      <script src="/bundle.js" type="text/javascript"></script>
    </body>
  </html>
  `;
}

app.use((req, res) => {
  const html = indexHtml();
  res.send(html);
});

http.createServer(app).listen(port, ip, (err) => {
  if(err) {
    return console.log(err);
  }
  console.log('Listening at ' + ip + ':' + port);
});
