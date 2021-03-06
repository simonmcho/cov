import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './ui/reducers'

const configureStore = (preloadedState) => {
  // load all redux middleware
  const middleware = [
    thunk
  ]

  // add redux devtools
  const composeEnhancers = typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize..
    }) : compose

  // other store enhancers if any
  const enhancer = composeEnhancers(
    applyMiddleware(...middleware)
  )

  const store = createStore(
    rootReducer,
    preloadedState,
    enhancer
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./ui/reducers', () => {
      const nextRootReducer = require('./ui/reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
