import React, { ReactElement } from 'react'
// Components
import { FioriComponentProperties } from '../FioriBase'

export interface BarMiddleInfo {
  children: ReactElement | ReactElement[]
}
export interface BarMiddleProperties extends
  FioriComponentProperties,
  BarMiddleInfo {
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