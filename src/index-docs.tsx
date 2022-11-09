import React from 'react'

import {
  HashRouter as Router
} from 'react-router-dom'

import { createRoot } from 'react-dom/client'

// Import components
import Root from './routes/__layout'

const containerRoot = document.getElementById('reactroot')!
const root = createRoot(containerRoot)
root.render(<Router><Root /></Router>)
