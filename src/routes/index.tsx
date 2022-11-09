import React from 'react'
import { Outlet } from 'react-router-dom'

import { AppHeader } from '../components/AppHeader'
import { AppMainContent } from '../components/AppMainContent'
import { AppSidePanel } from '../components/AppSidePanel'

const RouteRoot = () => {

  // Hooks //

  // Rendering //

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <div
        style={{
          flexShrink: 0,
        }}
      >
        <AppHeader />
      </div>
      <div
        style={{
          display: 'flex',
          flexBasis: 0,
          flexGrow: 1,
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            overflow: 'auto',
            flexShrink: 0,
          }}
        >
          <AppSidePanel />
        </div>
        <div
          style={{
            flexBasis: 0,
            flexGrow: 1,
          }}
        >
          <AppMainContent>
            <Outlet />
          </AppMainContent>

        </div>
      </div>
    </div>
  )
}

export default RouteRoot
