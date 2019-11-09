import React from 'react'
import Routes from './ui/routes'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import { hydrate } from 'react-dom'
import { useSSR } from 'react-i18next'
import { Provider } from 'react-redux'

import { ThemeProvider } from '@material-ui/styles'
import { fromJSON } from 'transit-immutable-js'
import theme from './theme'

import configureStore from './configure-store'

const preloadedState = window.__PRELOADED_STATE__
  ? fromJSON(window.__PRELOADED_STATE__)
  : undefined

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

const store = configureStore(preloadedState)

const BaseApp = () => {
  // useSSR(window.initialI18nStore, window.initialLanguage)

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}

hydrate(
  <BaseApp />,
  document.getElementById('root'),
  () => {
    // [ReHydratation](https://github.com/cssinjs/jss/blob/master/docs/ssr.md)
    const jssStyles = document.getElementById('jss-ssr')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }
)

if (module.hot) {
  module.hot.accept()
}
