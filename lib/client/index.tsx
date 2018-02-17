import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './app'
import configureStore from './state/store'

const store = configureStore()

// adding a dev object to window to support debugging
// tslint:disable-next-line:no-string-literal
window['dev'] = { store }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
