import React, { ReactNode } from 'react'

import { Page } from '../lib/components/page/Page'
import { PageBody } from '../lib/components/page/PageBody'
import { PageHeader } from '../lib/components/page/PageHeader'
export interface AppMainContentProperties {
  children?: ReactNode
}

export const AppMainContent = ({
  children
}: AppMainContentProperties) => {

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        overflow: 'auto',
        boxSizing: 'border-box',
      }}
    >
      {children}
    </div>
  )
}