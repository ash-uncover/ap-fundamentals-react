import React from 'react'
import { Outlet } from 'react-router-dom'

import { AppHeader } from '../components/AppHeader'
import { AppMainContent } from '../components/AppMainContent'
import { AppSidePanel } from '../components/AppSidePanel'

const RouteRoot = () => {

  // Hooks //

  // Rendering //

  return (
    <div >
      <AppSidePanel />
      <AppHeader />
      <AppMainContent>
        <Outlet />
      </AppMainContent>
    </div>
  )
}

export default RouteRoot
