import React, { ReactNode } from 'react'
// Components
import { FioriComponentProperties } from '../FioriBase'

export interface BarRightInfo {
  children: ReactNode
}
export interface BarRightProperties extends
  FioriComponentProperties,
  BarRightInfo {
}

export const BarRight = ({
  className,
  style,

  children
}: BarRightProperties) => {

  // Rendering //

  const classes = ['fd-bar__right']
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