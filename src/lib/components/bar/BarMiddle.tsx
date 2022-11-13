import React, { ReactElement } from 'react'

import { FioriComponentProperties } from '../FioriBase'

export interface BarMiddleProperties extends FioriComponentProperties {
  children: ReactElement | ReactElement[]
}

export const BarMiddle = ({
  className,
  style,

  children
}: BarMiddleProperties) => {

  // Rendering //

  const classes = ['fd-bar__middle']
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