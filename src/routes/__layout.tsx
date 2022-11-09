import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

import RouteRoot from './index'
import RouteDemo from './demo'


const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<RouteRoot />}>
          <Route path='demo/:demoId' element={<RouteDemo />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default Root
