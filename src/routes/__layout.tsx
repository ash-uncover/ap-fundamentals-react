import React from 'react'

import {
  Route,
  Routes,
} from 'react-router-dom'

import RouteRoot from './index'
import RouteComponents from './components'
import RouteComponent from './components/#id'


const Root = () => {
  return (
    <Routes>
      <Route path='*' element={<RouteRoot />}>
        <Route path='components' element={<RouteComponents />}>
          <Route path=':componentId' element={<RouteComponent />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default Root
