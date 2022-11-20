import React from 'react'

import {
  HashRouter as Router
} from 'react-router-dom'
import {
  Provider
} from 'react-redux'

import { createRoot } from 'react-dom/client'

// Import components
import Root from './routes/__layout'

import store from './store'

const containerRoot = document.getElementById('reactroot')!
const root = createRoot(containerRoot)
root.render(
  <Provider store={store}>
    <Router>
      <Root />
    </Router>
  </Provider>
)
