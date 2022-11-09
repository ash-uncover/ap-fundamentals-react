import React, { ReactElement } from 'react'

import { Page } from '../lib/components/page/Page'
import { PageBody } from '../lib/components/page/PageBody'
import { PageHeader } from '../lib/components/page/PageHeader'
export interface AppMainContentProperties {
  children?: ReactElement | ReactElement[]
}

export const AppMainContent = ({
  children
}: AppMainContentProperties) => {

  return (
    <div>
      KIKO
    </div>
  )
}