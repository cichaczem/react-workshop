## Redux workshop tutorial

### Pre homework:
https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6#.x0u45w69v

### Docs:
Redux: http://redux.js.org/index.html

### Tutorial
#### Step 1

Let’s start from reduxifing toggling basic info from enroll view (`src/components/enroll/BasicInfo`).
We want to change `toggleForm` to use `redux`.

1. Install locally package `redux` and `react-redux` (`npm install --save`). Install 1.0.0 version of `redux-router`.

2. Read [this doc](http://redux.js.org/docs/basics/Actions.html) and:
  * change related action in `EnrollActionCreator` to just return action data
  * notice `type` vs `actionType` difference
  * change `BasicInfo` component to dispatch action manually (assume for now that you have `dispatch` in `props`)
  * you can remove all code related to subscribing to the store changes
  
3. But of course we need to have this dispatch from somewhere. Read this [react-redux doc](https://github.com/rackt/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) and:
  * use `connect` method in your `BasicInfo` component.
  * implement `mapStateToProps` as empty for now
  
4. Read [reducers doc](http://redux.js.org/docs/basics/Reducers.html) and create `EnrollReducer` in a directory named `reducers`.
  Have in mind, that it's good practise to have reducers as pure functions.
  It means they are suppose to return new state merged with old one, instead of just modifing old one.
  Take a look on [`Object.assign` doc](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign).
  Notice that you should set initial state here, instead of doing this in your component's `contructor`.

5. Let's create a store:
  * Read [redux doc](http://redux.js.org/docs/basics/Store.html) and create your new store. You will need also to read [about combining reducers](http://redux.js.org/docs/basics/Reducers.html#splitting-reducers) to get this fully working.
  * Then read [react-redux doc](https://github.com/rackt/react-redux/blob/master/docs/api.md#provider-store) and use the store in `application.js`.
  
6. Now you can implement `mapStateToProps` in `BasicInfo` component:
  * from the global state, pick what your component needs to have in it's local state (`open`)
  * remember how you named key for related reducer while creating a store - state you want to pick is namespaced with this name
  * use `this.props.open` instead `this.state.open` in the component body

#### Step 2

Do the same for `toggleForm` in `src/enroll/Preferences.js`

#### Step 3

Reduxify `src/containers/Participants.js` (there is `setState` in `componentWillMount`)

#### Step 4

In real world API is not synchronious, we don't get data right away. Checkout to `REDUX4-pre` tag, where we have changed `getStudents` method from API to work asynchroniously (like a real world API).
But our participants view broke, so we need to fix it.
* Read [`redux-thunk` doc](https://github.com/gaearon/redux-thunk) and set it up.
* [Here](http://redux.js.org/docs/advanced/AsyncActions.html#async-action-creators) is more info how to adjust action creator.

#### Step 5

Checkout to tag `REDUX5-pre`.
Read [this documentation](http://redux.js.org/docs/recipes/ServerRendering.html) and try to use it in our `server.js`.
Tips:
 * change store.js to define and export function to configure store istead of just exporting store.
 * this funciton should take initialState and pass it to `createStore` from `redux`
 * create store in `application.js` (take a look on [`client.js` description](http://redux.js.org/docs/recipes/ServerRendering.html#-client-js) - note `intialState` taken from window, but we will get back to this later.
 * open `server.js` and do similar thing there - see [handling request part of the doc](http://redux.js.org/docs/recipes/ServerRendering.html#handling-the-request) - you can leave `initialState` as empty hash for now
 * see [this part](http://redux.js.org/docs/recipes/ServerRendering.html#inject-initial-component-html-and-state) for how to inject `__INITIAL_STATE__` that we are already using in `application.js` to set `initialState` for the store

We are almost there
Restart server and check page source. Notice that you can see component tree, but you don't see any data there.

#### Step 6

It's because data for the server side are fetched asynchroniously on client side and fetching finishes after server renders the page.
So all we need is to fetch data also server side and wait with rendering the page for fetch to finish.

* Paste this method to your `server.js`:

```js
function fetchAll(store, renderProps) {
  return renderProps.components.map((componentClass) => {
    if (componentClass.fetchData) {
      return componentClass.fetchData(store.dispatch, renderProps.params)
    }
  });
}
```
* This will return an array with promises - components that match the current route will be mapped to their `fetchData` method, which is suppose to return promise
* We don't have `fetchData` method in the componente, so let's add one - for `Partitipants.js`:
  * method should be static
  * method should take `dispatch` and `params` as arguments
  * dispatch action requesting students there (using `dispatch` from arguments)
  * use this method in `componenentWillMount`
* In `server.js`, use [`Promise.all`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) to wait for all the promises returned by `fetchAll` method and render html only after all promises are resolved.
* And the last thing is that we need configure `redux-router` (it's already installed)
  * use this code to configure the store:
  ```js
  export function configureStore(reduxReactRouter, createHistory, initialState = {}) {
  const createStoreWithMiddleware = compose(
    applyMiddleware(thunk),
    reduxReactRouter({ routes, createHistory })
  )(createStore);

  return createStoreWithMiddleware(reducers, initialState);
}
  ```
 * take a look on [client](https://github.com/acdlite/redux-router/blob/master/examples/server-rendering/client.js) and [server](https://github.com/acdlite/redux-router/blob/master/examples/server-rendering/server.js) examples and configure `redux-router` it in our application
