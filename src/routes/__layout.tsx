import React from 'react'

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'

import RouteRoot from './'

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<RouteRoot />}>
        </Route>
      </Routes>
    </Router>
  )
}

export default Root
