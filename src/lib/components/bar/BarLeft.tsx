import React, { ReactElement } from 'react'

import { FioriComponentProperties } from '../FioriBase'

export interface BarLeftProperties extends FioriComponentProperties {
  children: ReactElement | ReactElement[]
}

export const BarLeft = ({
  className,
  style,

  children
}: BarLeftProperties) => {

  // Rendering //

  const classes = ['fd-bar__left']
  if (className) {
    classes.push(className)
  }

  return (
    <div
      className={classes.join(' ')}
      style={style}
    >
      {children}
    </div>
  )
}