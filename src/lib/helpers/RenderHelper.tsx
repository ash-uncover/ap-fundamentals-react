import React, { ReactNode } from 'react'
import { Icon, IconInfo } from "../components/icon/Icon"

export const renderIcon = (iconInfo: string | IconInfo): ReactNode => {
  if (typeof iconInfo === 'string') {
    return (<Icon icon= { iconInfo } />)
  }
  return <Icon { ...iconInfo } />
}
