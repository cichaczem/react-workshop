import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import Express from 'express';
import http from 'http';

import config from './webpack/development.config.js';
import defaultConfig from './webpack/default.config.js';

import { ReduxRouter } from 'redux-router';
import { reduxReactRouter, match } from 'redux-router/server';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Routes from './src/routes';
import { Provider } from 'react-redux';
import { configureStore } from './src/store';
import createHistory from 'history/lib/createMemoryHistory';

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

const indexHtml = (renderProps, store, state) => {
  const app = ReactDOMServer.renderToString(
    <Provider store={store}>
      <ReduxRouter />
    </Provider>
  );
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
      <div id="app">${app}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(state)}
      </script>
      <script src="/bundle.js" type="text/javascript"></script>
    </body>
  </html>
  `;
}

app.use((req, res) => {
  let initialState = {}
  const store = configureStore(reduxReactRouter, createHistory, initialState);

  store.dispatch(match(req.originalUrl,
                       (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      render(res, store, renderProps)
    } else {
      res.status(404).send('Not found');
    }
  }));
});

function render(res, store, renderProps) {
  Promise.all(fetchAll(store, renderProps)).then(() => {
    try {
      const finalState = store.getState();
      const html = indexHtml(renderProps, store, finalState);
      res.send(html);
    } catch(e) {
      res.status(500).send("Something went wrong");
    }
  }).catch((response) => {
    res.status(500).send("Something went wrong");
  });
}

function fetchAll(store, renderProps) {
  return renderProps.components.map((componentClass) => {
    if (componentClass.fetchData) {
      return componentClass.fetchData(store.dispatch, renderProps.params)
    }
  });
}

http.createServer(app).listen(port, ip, (err) => {
  if(err) {
    return console.log(err);
  }
  console.log('Listening at ' + ip + ':' + port);
});
