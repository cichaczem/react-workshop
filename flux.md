## Flux workshop tutorial

### Pre homework:
https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207?gi=1f5594e56680#.ec8f3aghg

### Docs:
Flux: https://facebook.github.io/flux/docs/overview.html

Events: https://nodejs.org/api/events.html

### Tutorial
#### Step 1
1. Install locally package `flux` and `events`

2. Every state change will be done using dispatching actions. So we need something to dispatch these actions - so let’s create `AppDispatcher` in `src/AppDispatcher.js`
See the [docs](http://facebook.github.io/flux/docs/dispatcher.html#content).

3. Let’s start from fluxifing toggling basic info from enroll view (`src/components/enroll/BasicInfo`).
We want to change `toggleForm` to not use `setState` but to dispatch action.

4. Modification of the global state should happen in the store (although you can have more than one store), so let’s create store in `src/stores/EnrollStore.js`.
Use `register` Dispatcher method to register for actions and handle `TOGGLE_BASIC_INFO` actionType.

5. From [events docs](https://nodejs.org/api/events.html), use `on`, `emit` and `removeListener` for:
  * emitting change after handled `TOGGLE_BASIC_INFO` action in `EnrollStore`
  * subscribing to store change in component’s `componentWillMount` method
  * removing this subscription in `componentWillUnmount` method

The best for now would be to wrap event operations with methods in `EnrollStore` (we will move it out to more general place later).

6. In the subscribed method in the component we can now finally update our local component state:

```js
setState({ open: value })
```

where `value` should be taken from the store (you need to add proper method)

#### Step 2

Refactor code:

1. create new folder - `action_creators` - and new class there - `EnrollActionCreator.js`
2. move dispatching action to separate method in `EnrollActionCreator`
3. create new folder - `constants` - and new file there - `ActionTypes.js`
4. move `TOGGLE_BASIC_INFO` string there

#### Step 3

Do the same for `toggleForm` in `src/enroll/Preferences.js`

#### Step 4

Fluxify `src/containers/Participants.js` (there is `setState` in `componentWillMount`)

#### Step 5

Open page source and see that we don’t have any content there : (
Notice that `<div id=“app”></div>` where our app should be rendered is empty.
It works perfectly client side, but it’s not server side, so our SEO sucks : (

Let’s take first step to make it make it better.

1. We need to enable ES6 in `server.js` file, so let’s add `--require babel-core/register` to the `dev` script in `package.json`

2. Open `server.js` and change it to use ES6 (imports, vars to consts,
   etc).
  References: [Babel](https://babeljs.io/docs/learn-es2015/) or [E6-features](http://es6-features.org/#ValueExportImport).

#### Step 6

1. Take a look on [server side rendering doc](https://github.com/rackt/react-router/blob/v1.0.3/docs/guides/advanced/ServerRendering.md) of `react-router` library and try to use it in `server.js`

<b>IMPORTANT TIPS</b> not mentioned there:
  * you need to change `routes.js` to include only `Route` elements, you need to move `Router` element to the upper level (`application.js`).
  * you need to move creating history to the `application.js`
