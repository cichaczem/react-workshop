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

