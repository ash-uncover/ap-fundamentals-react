import React from 'react'

import {
  Route,
  Routes,
} from 'react-router-dom'

import RouteRoot from './index'
import RouteDemos from './demo'
import RouteDemo from './demo/#id'


const Root = () => {
  return (
    <Routes>
      <Route path='*' element={<RouteRoot />}>
        <Route path='demo' element={<RouteDemos />}>
          <Route path=':demoId' element={<RouteDemo />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default Root
