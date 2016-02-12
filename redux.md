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

In real world API is not synchronious, we don't get data right away. Checkout to `REDUX3` tag, where we have changed `getStudents` method from API to work asynchroniously (like a real world API).
But our participants view broke, so we need to fix it.
* Read [`redux-thunk` doc](https://github.com/gaearon/redux-thunk) and set it up.
* [Here](http://redux.js.org/docs/advanced/AsyncActions.html#async-action-creators) is more info how to adjust action creator.

#### Step 5

Isomorphic stuff TODO
